package fr.wirth.admin.boxe.domain;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "fighter_season")
public class FighterSeason extends PanacheEntity {

    @ManyToOne(optional = false)
    @JoinColumn(name = "fighter_id")
    private Fighter fighter;

    @Column(nullable = false)
    private FighterType type;

    @ManyToOne(optional = false)
    @JoinColumn(name = "season_id")
    private Season season;
}
