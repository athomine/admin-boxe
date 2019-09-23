import { Component, OnInit } from '@angular/core';
import BOXEURS from '../../../../fake-data/boxeurs.json';
import { Boxeur } from 'src/model/boxeur.js';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public boxeurs: Array<Boxeur>;

  constructor() { }

  ngOnInit() {
    this.boxeurs = BOXEURS;

    this.boxeurs.sort(function(a, b){
      return a.prenom.localeCompare(b.prenom);
    });
  }

}
