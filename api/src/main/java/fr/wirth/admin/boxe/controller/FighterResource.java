package fr.wirth.admin.boxe.controller;

import fr.wirth.admin.boxe.domain.Fighter;
import fr.wirth.admin.boxe.domain.FighterSeason;
import fr.wirth.admin.boxe.dto.FighterDTO;
import fr.wirth.admin.boxe.dto.creation.FighterCreationDTO;
import fr.wirth.admin.boxe.dto.creation.FighterSeasonCreationDTO;
import fr.wirth.admin.boxe.mapper.FighterMapper;
import fr.wirth.admin.boxe.service.FighterService;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
@Path("/fighters")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class FighterResource {

    @Inject
    FighterService fighterService;

    @Inject
    FighterMapper fighterMapper;


    @POST
    public Response create(FighterCreationDTO fighterCreation) {
        Fighter fighter = fighterService.createFighter(fighterCreation);
        return Response.ok(fighter).build();
    }

    @GET
    public Response list() {
        List<FighterSeason> fighters = fighterService.listCurrents();
        List<FighterDTO> result = fighters.stream().map(fighterMapper::fromFighterSeasonToDto).collect(Collectors.toList());
        return Response.ok(result).build();
    }

    @POST
    @Path("/affect")
    public Response affect(@Valid FighterSeasonCreationDTO fighterSeasonCreation) {
        fighterService.addFighterOnSeason(fighterSeasonCreation.getFighterId(), fighterSeasonCreation.getFighterType());
        return Response.ok().build();
    }
}
