package fr.wirth.admin.boxe.domain;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table(name = "exercise_config")
public class ExerciseConfig extends PanacheEntity {

    @Column(nullable = false)
    private Long duration;

    @Column(nullable = false)
    private FighterType fighterType;
}
