package fr.wirth.admin.boxe.dto.creation;

import fr.wirth.admin.boxe.domain.Gender;
import lombok.Getter;
import lombok.Setter;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Setter
public class FighterCreationDTO {

    @NotBlank
    private String firstName;
    @NotBlank
    private String lastName;
    @JsonbDateFormat(value = "yyyy-MM-dd")
    private LocalDate birthDate;
    @NotNull
    private Gender gender;
    @NotNull
    private Long userId;

}
