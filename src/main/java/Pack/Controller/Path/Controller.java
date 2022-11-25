package Pack.Controller.Path;

import Pack.Builder.Built;
import Pack.Controller.Interceptor.HashRequired;
import Pack.model.API.ObjectData.Application;
import Pack.model.API.ObjectData.User;
import Pack.model.API.In.IModel;

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
public class Controller {
    @Inject @Built
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
    @HashRequired
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

            String login = httpHeaders.getHeaderString("LOGIN");

               model.InsertApl(application, login);
                resultJSON = jsonb.toJson(application);

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @GET
    @HashRequired
    @Path("/applications/user")
    @Consumes("application/json")
    @Produces("application/json")
    public Response table(@Context HttpHeaders httpHeaders)
    {
        Jsonb jsonb = JsonbBuilder.create();
        String login;
        String resultJSON;
        try {

            login = httpHeaders.getHeaderString("LOGIN");

                resultJSON = jsonb.toJson(model.GetApl(login));

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @DELETE
    @HashRequired
    @Path("/applications/user/application")
    @Consumes("application/json")
    @Produces("application/json")
    public Response delet(@Context HttpHeaders httpHeaders)
    {
        String delete;

        try {

            delete = httpHeaders.getHeaderString("ARR");

                model.DeleteApl(delete);
                return Response.status(Response.Status.OK).build();

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
    }
}