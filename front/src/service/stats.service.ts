import { Injectable } from '@angular/core';
import DATASET from '../fake-data/competiteurs-stats.json';
@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() { }

  getRaw(exercice: string): Array<any> {

    return [{
      personne: 'cyril w',
      value: 12
    }, {
      personne: 'nath',
      value: 10
    }];
  }

  createLastSessionStats(exercice: string, tailleCategorie: number): any {
    const repartitionTmp = [];

    let sum = 0;

    DATASET.forEach(personne => {
      const exerciceData = personne[exercice];
      const value = exerciceData[exerciceData.length - 1];

      sum += value;
      const truncedValue = Math.trunc(value / tailleCategorie) * tailleCategorie;

      const label = truncedValue + ' - ' + (truncedValue + tailleCategorie);

      if (repartitionTmp[label]) {
        repartitionTmp[label]++;
      } else {
        repartitionTmp[label] = 1;
      }
    });

    const avg = sum / DATASET.length;

    let ecartValues = 0;

    DATASET.forEach(personne => {
      const exerciceData = personne[exercice];
      const value = exerciceData[exerciceData.length - 1];

      ecartValues += Math.pow(Math.abs(value - avg), 2);

    });

    const ecartType = Math.sqrt(ecartValues / DATASET.length);

    const data = {
      repartition : [],
      avg: 0,
      sum: 0,
      ec : 0,
      ec1 : 0,
      ec2 : 0
    };

    for (const [key, value] of Object.entries(repartitionTmp)) {
      data.repartition.push({
        tranche : key,
        quantite : value
      });
    }


    const rep = {
      ec1 : 0,
      ec2 : 0
    };

    DATASET.forEach(personne => {
      const exerciceData = personne[exercice];
      const value = exerciceData[exerciceData.length - 1];

      if (value > avg - ecartType && value < avg + ecartType) {
        rep.ec1 ++;
      }
      if (value > avg - 2 * ecartType && value < avg + 2 * ecartType) {
        rep.ec2 ++;
      }
    });

    rep.ec1 = rep.ec1 / DATASET.length;
    rep.ec2 = rep.ec2 / DATASET.length;


    data.avg = avg;
    data.sum = sum;
    data.ec = ecartType;
    data.ec1 = rep.ec1;
    data.ec2 = rep.ec2;

    console.log(data);
    return data;
  }
}
