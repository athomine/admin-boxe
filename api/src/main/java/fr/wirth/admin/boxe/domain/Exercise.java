package fr.wirth.admin.boxe.domain;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "exercise")
@Getter
@Setter
public class Exercise extends PanacheEntity {

    private String name;
}
