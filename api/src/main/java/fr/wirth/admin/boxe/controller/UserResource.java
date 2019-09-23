package fr.wirth.admin.boxe.controller;

import fr.wirth.admin.boxe.domain.User;
import fr.wirth.admin.boxe.dto.creation.UserCreationDTO;
import fr.wirth.admin.boxe.service.UserService;

import javax.annotation.security.PermitAll;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * https://github.com/devoxx/quarkusHipster/blob/master/backend/pom.xml
 */
@ApplicationScoped
@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    @Inject
    UserService userService;

    @POST
    @Path("/register")
    @PermitAll
    public Response register(@Valid UserCreationDTO userCreation) {
        User user = this.userService.createUser(userCreation);
        return Response.ok(user).build();
    }

}
