import { Component, OnInit, Input, NgZone, OnChanges, AfterViewChecked, AfterContentInit, AfterViewInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { StatsService } from 'src/service/stats.service.js';

@Component({
  selector: 'app-repartition-exercice',
  templateUrl: './repartition-exercice.component.html',
  styleUrls: ['./repartition-exercice.component.scss']
})
export class RepartitionExerciceComponent implements OnInit, AfterViewInit {

  @Input() public exercice: string;
  public chartId: string;

  private data = [];

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.chartId = `chart-${this.exercice}`;
    am4core.useTheme(am4themes_animated);
  }

  ngAfterViewInit() {
    this.data = this.statsService.getRaw(this.exercice);

    const chart = am4core.create(this.chartId, am4charts.XYChart);
    chart.data = this.data;

    // Create axes
    const xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = 'personne';

    chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    const series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = 'value';
    series1.dataFields.categoryX = 'personne';
    series1.dataFields.value = 'value';
    series1.strokeOpacity = 0;
    series1.cursorTooltipEnabled = false;

    const bullet1 = series1.bullets.push(new am4charts.CircleBullet());
    bullet1.tooltipText = '{categoryX} : {valueY}';

  }
}
