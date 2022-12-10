package Pack.Controller.Interceptor;

import java.io.IOException;

import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.ext.Provider;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;

@Provider
@HashRequired
public class Interceptor implements ContainerRequestFilter {

    static String salt = "sadfasdfasdhndk";

    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {

        String token = requestContext.getHeaderString("TOKEN");
        String login = requestContext.getHeaderString("LOGIN");
        String role = requestContext.getHeaderString("ROLE");

        int b = (salt + login + salt + role +salt).hashCode();

        if (!token.equals(Integer.toString(b))){
            throw new NotFoundException();
        }
    }
}
