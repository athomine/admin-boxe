package fr.wirth.admin.boxe.domain;


import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "exercise_result")
@Getter
@Setter
public class ExerciseResult extends PanacheEntity {

    @ManyToOne(optional = false)
    private Fighter fighter;

    @ManyToOne(optional = false)
    private Session session;

    @ManyToOne(optional = false)
    private Exercise exercise;

    @Column(nullable = false)
    private Integer quantity;
}
