import { Component, OnInit, OnDestroy } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { CommonModule } from '@angular/common';

interface Player {
  name: string;
  age: number;
  position: string;
  nationality: string;
  years_in_club: string;
  goals: number;
}

@Component({
  selector: 'app-dash-barca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dash-barca.component.html',
  styleUrls: ['./dash-barca.component.css']
})
export class DashBARCAComponent implements OnInit, OnDestroy {
  private root!: am5.Root;
  players: Player[] = [
    // Tus datos de jugadores aquí (los mismos que en la tabla)
    {
      name: "Lionel Messi",
      age: 36,
      position: "Forward",
      nationality: "Argentina",
      years_in_club: "2000-2021",
      goals: 672
    },
    // ... resto de jugadores
  ];

  ngOnInit() {
    this.createChart();
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }

  createChart() {
    // Crear elemento raíz
    this.root = am5.Root.new('chartdiv');

    // Configurar tema
    this.root.setThemes([am5themes_Animated.new(this.root)]);

    // Crear gráfico
    const chart = this.root.container.children.push(
      am5percent.PieChart.new(this.root, {
        layout: this.root.verticalLayout,
        innerRadius: am5.percent(40)
      })
    );

    // Crear serie
    const series = chart.series.push(
      am5percent.PieSeries.new(this.root, {
        name: "Goles",
        valueField: "goals",
        categoryField: "name",
        alignLabels: false,
        tooltip: am5.Tooltip.new(this.root, {
          labelText: "{category}: {value} goles"
        })
      })
    );

    // Configurar datos
    series.data.setAll(this.players);

    // Configurar apariencia
    series.slices.template.setAll({
      stroke: am5.color(0xffffff),
      strokeWidth: 2
    });

    series.labels.template.setAll({
      fontSize: 12,
      fill: am5.color(0x000000),
      text: "{category}"
    });

    // Añadir leyenda
    const legend = chart.children.push(
      am5.Legend.new(this.root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15,
        layout: this.root.horizontalLayout
      })
    );

    legend.data.setAll(series.dataItems);
  }
}