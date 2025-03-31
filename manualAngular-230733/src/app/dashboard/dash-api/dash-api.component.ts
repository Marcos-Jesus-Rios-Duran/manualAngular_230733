import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dash-api',
  templateUrl: './dash-api.component.html',
  styleUrls: ['./dash-api.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DashAPIComponent implements OnInit, OnDestroy {
  private root!: am5.Root;
  data: any[] = [];
  showActiveOnly = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
    setInterval(() => this.fetchData(), 5000);
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }

  fetchData() {
    const url = this.showActiveOnly
      ? 'http://192.168.1.73:3000/allCurrentSessions'
      : 'http://192.168.1.73:3000/allSessions';

    this.http.get(url).subscribe((response: any) => {
      this.data = response.sessions;
      this.createChart();
    });
  }

  createChart() {
    // Dispose previous chart if exists
    if (this.root) {
      this.root.dispose();
    }

    // Create root element
    this.root = am5.Root.new('chartdiv');

    // Set themes
    this.root.setThemes([am5themes_Animated.new(this.root)]);

    // Create chart
    const chart = this.root.container.children.push(
      am5percent.PieChart.new(this.root, {
        layout: this.root.verticalLayout,
        innerRadius: am5.percent(50)
      })
    );

    // Create series
    const series = chart.series.push(
      am5percent.PieSeries.new(this.root, {
        name: "Series",
        valueField: "count",
        categoryField: "status",
        alignLabels: false
      })
    );

    // Prepare data for chart (group by status)
    const statusCounts = this.data.reduce((acc, session) => {
      acc[session.status] = (acc[session.status] || 0) + 1;
      return acc;
    }, {});

    const chartData = Object.keys(statusCounts).map(status => ({
      status: status,
      count: statusCounts[status]
    }));

    series.data.setAll(chartData);

    // Add legend
    const legend = chart.children.push(
      am5.Legend.new(this.root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15
      })
    );

    legend.data.setAll(series.dataItems);
  }

  toggleActiveSessions() {
    this.showActiveOnly = !this.showActiveOnly;
    this.fetchData();
  }
}