package fr.wirth.admin.boxe.domain;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "session")
public class Session extends PanacheEntity {

    @Temporal(TemporalType.DATE)
    private Date date;

    @ManyToOne(optional = false)
    private Season season;
}
