import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  public exo = ['teitrong', 'abdo', 'planche', 'mattrong', 'burpee'];

  constructor() { }

  ngOnInit() {
  }
}