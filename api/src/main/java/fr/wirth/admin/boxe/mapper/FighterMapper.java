package fr.wirth.admin.boxe.mapper;

import fr.wirth.admin.boxe.config.QuarkusMappingConfig;
import fr.wirth.admin.boxe.domain.Fighter;
import fr.wirth.admin.boxe.domain.FighterSeason;
import fr.wirth.admin.boxe.dto.FighterDTO;
import fr.wirth.admin.boxe.dto.creation.FighterCreationDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(config = QuarkusMappingConfig.class)
public abstract class FighterMapper {

    public abstract Fighter fromFighterCreation(FighterCreationDTO fighterCreationDTO);

    @Mapping(source = "fighter.lastName", target = "lastName")
    @Mapping(source = "fighter.firstName", target = "firstName")
    @Mapping(source = "fighter.gender", target = "gender")
    public abstract FighterDTO fromFighterSeasonToDto(FighterSeason fighterSeason);

}
