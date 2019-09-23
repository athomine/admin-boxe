import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../theme/shared/shared.module';
import {MorrisJsModule} from 'angular-morris-js';
import { StatsComponent } from './stats.component';
import { StatsRoutingModule } from './stats-routing.module';
import { RepartitionExerciceComponent } from './repartition-exercice/repartition-exercice.component';

@NgModule({
  imports: [
    CommonModule,
    StatsRoutingModule,
    SharedModule,
    MorrisJsModule
  ],
  declarations: [
    StatsComponent,
    RepartitionExerciceComponent]
})
export class StatsModule { }
