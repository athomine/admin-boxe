package fr.wirth.admin.boxe.service;

import fr.wirth.admin.boxe.domain.User;
import fr.wirth.admin.boxe.dto.creation.UserCreationDTO;
import fr.wirth.admin.boxe.mapper.UserMapper;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

@ApplicationScoped
public class UserService {

    @Inject
    UserMapper userMapper;

    @Transactional
    public User createUser(UserCreationDTO userCreation){
        Long count = User.count("login", userCreation.getLogin());
        if(count > 0){
            throw new IllegalArgumentException();
        }

        User user = userMapper.fromUserCreation(userCreation);
        user.persist();
        return user;
    }


}
