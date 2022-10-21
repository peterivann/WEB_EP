package com.example.web_ep.Server;

import com.example.web_ep.DB.DatabaseHandler;

import com.example.web_ep.ObjectData.Application;
import com.example.web_ep.ObjectData.Delete;
import com.example.web_ep.ObjectData.Table;
import com.example.web_ep.ObjectData.User;
import jakarta.ws.rs.POST;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;

import jakarta.ws.rs.core.Response;

import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;

import java.util.ArrayList;

@Path("/")
public class Service {
    static String salt = "sadfasdfasdhndk";
    @POST
    @Path("/auto")
    @Consumes("application/json")
    @Produces("application/json")
    public Response auto(String userJSON)
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

            if (DatabaseHandler.getUser(user.getLogin(), user.getPass())){
                int a = (salt + user.getPass() + user.getLogin() + salt).hashCode();
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
    @Path("/reg")
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

            if(DatabaseHandler.getUser(user.getLogin(), user.getPass())){
                user.setMassage("Such a user already exists");
            }
            else {
                DatabaseHandler.signUpUser(user.getLogin(), user.getPass());
                int a = (salt + user.getPass() + user.getLogin() + salt).hashCode();
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
    @Path("/hash_u")
    @Consumes("application/json")
    @Produces("application/json")
    public Response hash_u(String userJSON)
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

            int b = (salt + user.getPass() + user.getLogin() + salt).hashCode();

            if (user.getHash() == b){
                user.setMassage("Yes");
            }
            else{
                user.setMassage("No");
            }
            resultJSON = jsonb.toJson(user);
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @POST
    @Path("/add_up")
    @Consumes("application/json")
    @Produces("application/json")
    public Response add_ap(String userJSON)
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

            DatabaseHandler.InsertApplication(DatabaseHandler.GetId(application.getLogin_user(), application.getPass_user()), DatabaseHandler.GetPoz(DatabaseHandler.GetId(application.getLogin_user(), application.getPass_user())), application.getTopic(), application.getContact(), application.getComment());
            resultJSON = jsonb.toJson(application);
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @POST
    @Path("/table")
    @Consumes("application/json")
    @Produces("application/json")
    public Response table(String userJSON)
    {
        Jsonb jsonb = JsonbBuilder.create();
        Table table;
        String resultJSON;
        try {
            try {
                   table = jsonb.fromJson(userJSON, Table.class);
            }
            catch (Exception e) {
                throw new Exception("Error while JSON transforming.");
            }

            ArrayList<ArrayList<String>> arr = DatabaseHandler.GetApplication(DatabaseHandler.GetId(table.getLogin_user(), table.getPass_user()));
            table.setArr(arr);
            resultJSON = jsonb.toJson(table);
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @POST
    @Path("/delet")
    @Consumes("application/json")
    @Produces("application/json")
    public Response delet(String userJSON)
    {
        Jsonb jsonb = JsonbBuilder.create();
        Delete delete;
        String resultJSON;
        try {
            try {
                delete = jsonb.fromJson(userJSON, Delete.class);
            }
            catch (Exception e) {
                throw new Exception("Error while JSON transforming.");
            }

            for (String strings : delete.getElement()) {
                DatabaseHandler.DeleteApplication(strings);
            }
            resultJSON = jsonb.toJson(delete);
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }
}