import { Component, OnInit } from '@angular/core';
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { ChartType, ChartOptions } from "chart.js";
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: "bottom",
      labels: {
        fontColor: "#454545",
        fontSize: 12,
        fontStyle: "bold",
        boxWidth: 12
        //     generateLabels:  function (chart) {
        //       var data = chart.data;
        //       console.log(data)
        //         chart.legend.afterFit = function() {
        //           //  this.height = this.height +40

        //         };
        //         if (data.labels.length && data.datasets.length) {
        //           return data.labels.map(function(label, i) {
        //               var meta = chart.getDatasetMeta(0);
        //               var ds = data.datasets[0];
        //               var arc = meta.data[i];
        //               var custom = arc && arc.custom || {};
        //               var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
        //               var arcOpts = chart.options.elements.arc;
        //               var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
        //               var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
        //               var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

        // // We get the value of the current label
        // var value = chart.config.data.datasets[arc._datasetIndex].data[arc._index];

        //               return {
        //                   // Instead of `text: label,`
        //                   // We add the value to the string
        //                   text: label + " : " + value,
        //                   fillStyle: fill,
        //                   strokeStyle: stroke,
        //                   lineWidth: bw,
        //                   hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
        //                   index: i,

        //               };
        //           });
        //       } else {
        //           return [];
        //       }

        // }
        // usePointStyle: true,
      },
      defaultFontSize: 30
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 0
      }
    },
    plugins: {
      datalabels: {
        formatter: (value:any, ctx:any) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data: number) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "#7e7c81",
        font: {
          weight: "bold",
          size: 16
        },
        anchor: "end",
        // clamp :true,
        align: "start"
        // offset: "30"
        // clip:true
      }
    }
  };
  public pieChartLabels = ["active", "Completed", "pendening", "canceled"];
  public pieChartData: number[] = [100, 200, 300, 400];
  public pieChartType = "pie";
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: [
        "rgb(233,233,235)",
        "rgb(0,127,133)",
        "rgb(0,136,189)",
        "rgb(255,122,107)"
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
