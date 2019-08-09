
import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { Maps, Highlight, Zoom, MapsTooltip } from '@syncfusion/ej2-angular-maps';
import WorldData from 'world-map-geojson';
Maps.Inject(Highlight, Zoom, MapsTooltip);
@Component({
  selector: 'app-map-chart',
    template:
    `<ejs-maps id='rn-container'
    [zoomSettings] = 'zoomSettings'
    [titleSettings] = 'titleSettings'>
     <e-layers>
    <e-layer
    [shapeData] = 'shapeData'
    [highlightSettings] ='highlightSettings'
    [dataLabelSettings] = 'dataLabelSettings'
    [tooltipSettings] ='tooltipSettings'
    [shapePropertyPath]= 'shapePropertyPath'
    [shapeDataPath]= 'shapeDataPath'
    [shapeSettings] = 'shapeSettings'
    ></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class MapChartComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  public titleSettings: Object;
  // tslint:disable-next-line:ban-types
  public shapeData: Object = WorldData;
  // tslint:disable-next-line:ban-types
  public shapePropertyPath: String = 'name';
    // tslint:disable-next-line:ban-types
    public shapeDataPath: String = 'Country';
  // tslint:disable-next-line:ban-types
  public dataSource: Object[];
  // tslint:disable-next-line:ban-types
  public highlightSettings: Object;
  // tslint:disable-next-line:ban-types
  public zoomSettings: Object;
  // tslint:disable-next-line:ban-types
  public tooltipSettings: Object;
  // tslint:disable-next-line:ban-types
  public shapeSettings: Object;
  // tslint:disable-next-line:ban-types
  public dataLabelSettings: Object;
  public temp: string = '';
    ngOnInit(): void {

      this.titleSettings = {
        text: 'World map membership',
         titleStyle: {
           size: '16px'
          }
       };

      // this.dataSource = [{  Country: 'China', Membership: 'Permanent'},
      //       {Country: 'France', Membership: 'Permanent' },
      //       { Country: 'Russia', Membership: 'Permanent'},
      //       {Country: 'Kazakhstan', Membership: 'Non-Permanent'},
      //       { Country: 'Poland', Membership: 'Non-Permanent'},
      //       {Country: 'Sweden', Membership: 'Non-Permanent'}];
      this.zoomSettings = {
        enable: true,
    };
    this.shapeSettings = {
      autofill: true
      // colorValuePath: 'Membership',
      // colorMapping: [
      // {
      //     value: 'Permanent', color: '#D84444'
      // },
      // {
      //     value: 'Non-Permanent', color: '#316DB5'
      // }]
  };
  this.dataLabelSettings  = {
    visible: true,
    labelPath: 'name',
    smartLabelMode: 'Trim'
};
    this.tooltipSettings = {
      visible: true,
      valuePath: 'name'
  };
       this.highlightSettings = {
            enable: true,
            fill: 'green',
            border: { color: 'white', width: 2}
        };
    }
}
