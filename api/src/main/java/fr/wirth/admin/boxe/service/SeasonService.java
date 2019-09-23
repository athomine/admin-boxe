package fr.wirth.admin.boxe.service;

import fr.wirth.admin.boxe.domain.Season;

import javax.enterprise.context.ApplicationScoped;
import java.util.Date;

@ApplicationScoped
public class SeasonService {

    public void create(Date debut, Date fin) {
        new Season(debut, fin).persist();
    }
}
