import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  chartOptions = {
    animationEnabled: true,
    theme: 'dark2',
    exportEnabled: true,
    title: {
      text: 'Developer Work Week',
    },
    subtitles: [
      {
        text: 'Median hours/week',
      },
    ],
    data: [
      {
        type: 'pie', 
        indexLabel: '{name}: {y}%',
        dataPoints: [
          { name: 'Overhead', y: 9.1 },
          { name: 'Problem Solving', y: 3.7 },
          { name: 'Debugging', y: 36.4 },
          { name: 'Writing Code', y: 30.7 },
          { name: 'Firefighting', y: 20.1 },
        ],
      },
    ],
  };




  chartTwoOptions = {
    theme: "dark2",
    animationEnabled: true,
    exportEnabled: true,
    title:{
        text: "Temperature of New York & London",
    },
    axisY: {
        title: "Temperature",
        valueFormatString: "#0.##°F",
        crosshair: {
            enabled: true,
            valueFormatString: "#0.0°F"
        }
    },     
    axisX: {
        valueFormatString: "MMM",
        crosshair: {
            enabled: true,
            snapToDataPoint: true
        }
    },
    toolTip: {
        shared: true,		
    },
    data: [
      {
        type: "rangeColumn",
        bevelEnabled: true,
        yValueFormatString: "#0.##°F",
        name: "New York",
        showInLegend: true,
        dataPoints: [   
            { x: new Date(2021, 0, 1), y: [28, 40] },
            { x: new Date(2021, 1, 1), y: [30, 42] },
            { x: new Date(2021, 2, 1), y: [36, 50] },
            { x: new Date(2021, 3, 1), y: [46, 62] },
            { x: new Date(2021, 4, 1), y: [55, 71] },
            { x: new Date(2021, 5, 1), y: [64, 80] },
            { x: new Date(2021, 6, 1), y: [70, 85] },
            { x: new Date(2021, 7, 1), y: [69, 83] },
            { x: new Date(2021, 8, 1), y: [62, 76] },
            { x: new Date(2021, 9, 1), y: [51, 65] },
            { x: new Date(2021, 10, 1), y: [42, 54] },
            { x: new Date(2021, 11, 1), y: [34, 44] }
        ]
      }, {
        type: "rangeColumn",
        bevelEnabled: true,
        showInLegend: true,
        name: "London",
        yValueFormatString: "#0.##°F",
        dataPoints: [   
            { x: new Date(2021, 0, 1), y: [37, 47] },
            { x: new Date(2021, 1, 1), y: [37, 48] },
            { x: new Date(2021, 2, 1), y: [39, 53] },
            { x: new Date(2021, 3, 1), y: [43, 59] },
            { x: new Date(2021, 4, 1), y: [48, 65] },
            { x: new Date(2021, 5, 1), y: [54, 71] },
            { x: new Date(2021, 6, 1), y: [58, 75] },
            { x: new Date(2021, 7, 1), y: [57, 74] },
            { x: new Date(2021, 8, 1), y: [53, 68] },
            { x: new Date(2021, 9, 1), y: [48, 60] },
            { x: new Date(2021, 10, 1), y: [41, 53] },
            { x: new Date(2021, 11, 1), y: [38, 48] }
        ]
    }]
  }
}