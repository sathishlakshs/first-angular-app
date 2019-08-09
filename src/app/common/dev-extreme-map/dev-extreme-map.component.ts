import { Component, OnInit } from '@angular/core';
// import { NgModule, Component, enableProdMode } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { DxVectorMapModule } from 'devextreme-angular';
 import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
// import { FeatureCollection, Service } from './app.service';

@Component({
  selector: 'app-dev-extreme-map',
  template: `
  <dx-vector-map
  id="vector-map"
  [bounds]="[-180, 85, 180, -60]">
  <dxo-tooltip
      [enabled]="true"
      [customizeTooltip]="customizeTooltip"></dxo-tooltip>
  <dxi-layer
      [dataSource]="worldMap"
      [hoverEnabled]="false"></dxi-layer>
  <dxi-layer
      [dataSource]="markers"
      name="pies"
      elementType="pie"
      dataField="values"></dxi-layer>
  <dxi-legend [customizeText]="customizeText">
      <dxo-source layer="pies" grouping="color"></dxo-source>
  </dxi-legend>
</dx-vector-map>
  `,
  styles: [
    `::ng-deep #vector-map {
      height: 440px;
      width: 100%;
      display: block;
  }

  ::ng-deep .country {
      font-size: 15px;
      font-weight: 500;
  }`
  ]
})
export class DevExtremeMapComponent implements OnInit {

  worldMap: any = mapsData.world;
    markers: any;
    names: string[];

    constructor() {
    }

    ngOnInit() {
      this.names = ['Christian', 'Muslim', 'Unaffiliated', 'Buddhist', 'Jewish'];
this.markers = {
  type: 'FeatureCollection',
  features: [{
      coordinates: [34.6, -5.1],
      values: [61.4, 35.2, 1.4, 0, 0],
      country: 'Tanzania'
  }, {
      coordinates: [18.8, 15],
      values: [40.6, 55.3, 2.5, 0, 0],
      country: 'Chad'
  }, {
      coordinates: [7.36, 9.97],
      values: [49.3, 48.8, 0.4, 0, 0],
      country: 'Nigeria'
  }, {
      coordinates: [135.61, -24.57],
      values: [67.3, 2.4, 24.2, 2.7, 0.5],
      country: 'Australia'
  }, {
      coordinates: [103.3, 34.85],
      values: [5.1, 1.8, 52.2, 18.2, 0],
      country: 'China'
  }, {
      coordinates: [139.5, 37],
      values: [1.6, 0.2, 57, 36.2, 0],
      country: 'Japan'
  }, {
      coordinates: [100.8, 15.9],
      values: [0.9, 5.5, 0.3, 93.2, 0],
      country: 'Thailand'
  }, {
      coordinates: [10.4, 51.4],
      values: [68.7, 5.8, 24.7, 0.3, 0.3],
      country: 'Germany'
  }, {
      coordinates: [100.8, 65.3],
      values: [73.3, 10, 16.2, 0.1, 0.2],
      country: 'Russia'
  }, {
      coordinates: [-3.48, 40.36],
      values: [78.6, 2.1, 19, 0, 0.1],
      country: 'Spain'
  }, {
      coordinates: [-78.01, 21.72],
      values: [59.2, 0, 23, 0, 0],
      country: 'Cuba'
  }, {
      coordinates: [-63.7, -31.92],
      values: [85.2, 1, 12.2, 0.05, 0.5],
      country: 'Argentina'
  }, {
      coordinates: [-110.53, 60.78],
      values: [69, 2.1, 23.7, 0.5, 0.3],
      country: 'Canada'
  }, {
      coordinates: [-100.1, 40.14],
      values: [78.3, 0.9, 16.4, 1.2, 1.8],
      country: 'United States'
  }, {
      coordinates: [34.88, 31.16],
      values: [2, 18.6, 3.1, 0.3, 75.6],
      country: 'Israel'
  }].map( (data) => {
      const list = ['<span class="country">' + data.country + '</span>', '&nbsp;'];
      data.values.forEach( (value, i) => {
          if (value > 0) {
              list.push(this.names[i] + ': ' + value + '%');
          }
      });
      return {
          type: 'Feature',
          geometry: {
              type: 'Point',
              coordinates: data.coordinates
          },
          properties: {
              tooltip: list.join('\n'),
              values: data.values
          }
      };
  })
};
    }

    customizeText = (arg) => {
        return this.names[arg.index];
    }

    customizeTooltip = (arg) => {
        if (arg.layer.type === 'marker') {
            return {
                text: arg.attribute('tooltip')
            };
        }
    }

}
