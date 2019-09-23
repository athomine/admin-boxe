package fr.wirth.admin.boxe.service;

import fr.wirth.admin.boxe.domain.*;
import fr.wirth.admin.boxe.dto.creation.FighterCreationDTO;
import fr.wirth.admin.boxe.mapper.FighterMapper;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class FighterService {

    @Inject
    FighterMapper fighterMapper;

    @Transactional
    public Fighter createFighter(FighterCreationDTO fighterCreationDTO) {
        Fighter fighter = fighterMapper.fromFighterCreation(fighterCreationDTO);
        fighter.setUser(User.findById(fighterCreationDTO.getUserId()));
        fighter.persist();
        return fighter;
    }

    public List<Fighter> listAll() {
        return Fighter.listAll();
    }

    public List<FighterSeason> listCurrents() {
        return Fighter.find("select fs from FighterSeason fs join fs.season s where current_date() between s.startDate and s.endDate").list();
    }

    @Transactional
    public void addFighterOnSeason(Long fighterId, FighterType fighterType) {
        FighterSeason fighterSeason = new FighterSeason();
        fighterSeason.setFighter(Fighter.findById(fighterId));
        fighterSeason.setSeason(Season.find("current_date() between startDate and endDate").firstResult());
        fighterSeason.setType(fighterType);
        fighterSeason.persist();
    }
}
