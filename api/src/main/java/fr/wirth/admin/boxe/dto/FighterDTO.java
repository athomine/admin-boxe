package fr.wirth.admin.boxe.dto;

import fr.wirth.admin.boxe.domain.FighterType;
import fr.wirth.admin.boxe.domain.Gender;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FighterDTO {

    private String lastName;
    private String firstName;
    private Gender gender;
    private FighterType type;
}
