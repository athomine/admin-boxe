package fr.wirth.admin.boxe.dto.creation;

import fr.wirth.admin.boxe.domain.FighterType;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class FighterSeasonCreationDTO {

    @NotNull
    private Long fighterId;
    @NotNull
    private FighterType fighterType;
}
