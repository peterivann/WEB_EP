package com.example.web_ep.Server;

import com.example.web_ep.model.ObjectData.Application;
import com.example.web_ep.model.ObjectData.User;
import com.example.web_ep.model.ObjectData.ITable;
import com.example.web_ep.model.IModel;

import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.Consumes;

import jakarta.ws.rs.core.HttpHeaders;


import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.Response;

import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;

import jakarta.inject.Inject;


@Path("/")
public class Service {

    @Inject
    ITable table;
    @Inject
    IModel model;
    static String salt = "sadfasdfasdhndk";
    @POST
    @Path("/users/user")
    @Consumes("application/json")
    @Produces("application/json")
    public Response auth(String userJSON)
    {
        Jsonb jsonb = JsonbBuilder.create();
        User user;
        String resultJSON;
        try {
            try {
                user = jsonb.fromJson(userJSON, User.class);
            }
            catch (Exception e) {
                throw new Exception("Error while JSON transforming.");
            }

            if (model.AuthUser(user)){
                int a = (salt + user.getLogin() + salt).hashCode();
                user.setHash(a);
            }
            else {
                return Response.status(Response.Status.BAD_REQUEST).build();
            }
            resultJSON = jsonb.toJson(user);
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @POST
    @Path("/users")
    @Consumes("application/json")
    @Produces("application/json")
    public Response reg(String userJSON)
    {
        Jsonb jsonb = JsonbBuilder.create();
        User user;
        String resultJSON;
        try {
            try {
                user = jsonb.fromJson(userJSON, User.class);
            }
            catch (Exception e) {
                throw new Exception("Error while JSON transforming.");
            }

            if(model.CheckUser(user)){
                return Response.status(Response.Status.BAD_REQUEST).build();
            }
            else {
                model.RegUser(user);
                int a = (salt + user.getLogin() + salt).hashCode();
                user.setHash(a);
            }
            resultJSON = jsonb.toJson(user);
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @POST
    @Path("/applications")
    @Consumes("application/json")
    @Produces("application/json")
    public Response add_ap(String userJSON, @Context HttpHeaders httpHeaders)
    {
        Jsonb jsonb = JsonbBuilder.create();
        Application application;
        String resultJSON;
        try {
            try {
                application = jsonb.fromJson(userJSON, Application.class);
            }
            catch (Exception e) {
                throw new Exception("Error while JSON transforming.");
            }

            String token = httpHeaders.getHeaderString("TOKEN");
            String login = httpHeaders.getHeaderString("LOGIN");

            int b = (salt + login + salt).hashCode();

            if (token.equals(Integer.toString(b))){
               model.InsertApl(application, login);
                resultJSON = jsonb.toJson(application);
            }
            else{
                return Response.status(Response.Status.NOT_FOUND).build();
            }

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @GET
    @Path("/applications/user")
    @Consumes("application/json")
    @Produces("application/json")
    public Response table(@Context HttpHeaders httpHeaders)
    {
        Jsonb jsonb = JsonbBuilder.create();
        String token;
        String login;
        String resultJSON;
        try {

            token = httpHeaders.getHeaderString("TOKEN");
            login = httpHeaders.getHeaderString("LOGIN");

            int b = (salt + login + salt).hashCode();

            if (token.equals(Integer.toString(b))){
               model.GetApl(table, login);
                resultJSON = jsonb.toJson(table);
            }
            else{
                return Response.status(Response.Status.NOT_FOUND).build();
            }

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @DELETE
    @Path("/applications/user/application")
    @Consumes("application/json")
    @Produces("application/json")
    public Response delet(@Context HttpHeaders httpHeaders)
    {
        String delete;
        String token;
        String login;
        try {

            delete = httpHeaders.getHeaderString("ARR");
            token = httpHeaders.getHeaderString("TOKEN");
            login = httpHeaders.getHeaderString("LOGIN");

            int b = (salt + login + salt).hashCode();

            if (token.equals(Integer.toString(b))){
                model.DeleteApl(delete);
                return Response.status(Response.Status.OK).build();
            }
            else{
                return Response.status(Response.Status.NOT_FOUND).build();
            }

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
    }
}