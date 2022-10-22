package com.example.web_ep.Server;

import com.example.web_ep.ObjectData.Application;
import com.example.web_ep.ObjectData.Delete;
import com.example.web_ep.ObjectData.Table;
import com.example.web_ep.ObjectData.User;
import com.example.web_ep.model.IModel;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.POST;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;

import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.Response;

import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;

import jakarta.inject.Inject;


@Path("/")
public class Service {

    @Inject
    IModel model;
    static String salt = "sadfasdfasdhndk";
    @POST
    @Path("/users/user")
    @Consumes("application/json")
    @Produces("application/json")
    public Response auth(String userJSON, @Context HttpHeaders httpHeaders)
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
                user.setMassage("Yes");
            }
            else {
                user.setMassage("User not found");
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
    public Response reg(String userJSON, @Context HttpHeaders httpHeaders)
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
                user.setMassage("Such a user already exists");
            }
            else {
                model.RegUser(user);
                int a = (salt + user.getLogin() + salt).hashCode();
                user.setHash(a);
                user.setMassage("Yes");
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
                resultJSON = "No";
            }

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @POST
    @Path("/applications/user")
    @Consumes("application/json")
    @Produces("application/json")
    public Response table(String userJSON, @Context HttpHeaders httpHeaders)
    {
        Jsonb jsonb = JsonbBuilder.create();
        Table table;
        String token;
        String login;
        String resultJSON;
        try {
            try {
                   table = jsonb.fromJson(userJSON, Table.class);
            }
            catch (Exception e) {
                throw new Exception("Error while JSON transforming.");
            }

            token = httpHeaders.getHeaderString("TOKEN");
            login = httpHeaders.getHeaderString("LOGIN");

            int b = (salt + login + salt).hashCode();

            if (token.equals(Integer.toString(b))){
                model.GetApl(table, login);
                resultJSON = jsonb.toJson(table);
            }
            else{
                resultJSON = "No";
            }

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @POST
    @Path("/applications/user/application")
    @Consumes("application/json")
    @Produces("application/json")
    public Response delet(String userJSON, @Context HttpHeaders httpHeaders)
    {
        Jsonb jsonb = JsonbBuilder.create();
        Delete delete;
        String token;
        String login;
        String resultJSON;
        try {
            try {
                delete = jsonb.fromJson(userJSON, Delete.class);
            }
            catch (Exception e) {
                throw new Exception("Error while JSON transforming.");
            }

            token = httpHeaders.getHeaderString("TOKEN");
            login = httpHeaders.getHeaderString("LOGIN");

            int b = (salt + login + salt).hashCode();

            if (token.equals(Integer.toString(b))){
                model.DeleteApl(delete);
                resultJSON = jsonb.toJson(delete);
            }
            else{
                resultJSON = "No";
            }

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }
}