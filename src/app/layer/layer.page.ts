import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.page.html',
  styleUrls: ['./layer.page.scss'],
})
export class LayerPage implements OnInit {
  @Input() map: any;
  public activeLayers = [
    {
      id: 0,
      name: 'hospital',
      displayName: 'Hospitals',
      icon: 'bandage-outline',
      active: true,
      layer: undefined
    },
    {
      id: 1,
      name: 'airquality',
      displayName: 'Air Quality',
      icon: 'accessibility-outline',
      active: true,
      layer: undefined
    },
  ];
  public availableLayers = [];
  constructor() { }

  ngOnInit() {
    this.activeLayers.forEach( layer => {
      return layer.layer =  this.map.getLayer(layer.name)
    })
  }

  public deleteLayer(layer: any): void {
    this.map.removeLayer(layer.name);
    const index = this.activeLayers.indexOf(layer);
    layer.active = false;
    this.activeLayers.splice(index, 1);
    this.availableLayers.push(layer);
  }

  public addLayer(layers: any): void {
    let a = layers.layer;
    console.log(a)
    this.map.addLayer(a);
    const index = this.activeLayers.indexOf(layers);
    layers.active = true;
    this.availableLayers.splice(index, 1);
    this.activeLayers.push(layers);
  }
}
