package fr.wirth.admin.boxe.mapper;

import fr.wirth.admin.boxe.config.QuarkusMappingConfig;
import fr.wirth.admin.boxe.domain.User;
import fr.wirth.admin.boxe.dto.creation.UserCreationDTO;
import org.mapstruct.Mapper;

@Mapper(config = QuarkusMappingConfig.class)
public interface UserMapper {

    User fromUserCreation(UserCreationDTO userCreation);
}
