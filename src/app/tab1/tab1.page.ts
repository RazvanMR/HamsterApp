import {Component, OnInit} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {PopoverController} from '@ionic/angular';
import {LayerPage} from '../layer/layer.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public map: any;
  public darkTheme = false;
  public showSpinner = false;

  constructor(public popoverController: PopoverController) {
  }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaW9uaXRhYW5kcmVpIiwiYSI6ImNrd3J5MjYzZTExN3cyd3Fvcmp4ZnR4Y2UifQ.JiNAz79micXF5Iasn5APnQ';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/ionitaandrei/ckws2p07b1i4d15nvmxbnp7dy', // style URL
      width: 500,
      pitch: 50,
      center: [26.113768, 44.452888], // starting position [lng, lat]
      zoom: 17 // starting zoom
    });
    this.map.dragRotate.enable();
    this.map.touchZoomRotate.enableRotation();
    this.map.on('load', (e) => {
      this.map.resize();
      const hospitalLayer = this.map.getLayer('hospital');
      // this.map.addControl(new HelloWorldControl())
      this.map.addControl(new mapboxgl.NavigationControl());
      this.map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
// When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
          showUserHeading: true
        })
      );
    });
    this.map.on('click', (event) => {
      // If the user clicked on one of your markers, get its information.
      const features = this.map.queryRenderedFeatures(event.point, {
        layers: ['parks'] // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];
      const coord = feature['geometry'];
      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(coord.coordinates[0][0])
        .setHTML(
          `<h3>${feature.properties.name}</h3><p>${feature.properties.description}</p>`
        )
        .addTo(this.map);
    });
    this.map.on('click', (event) => {
      // If the user clicked on one of your markers, get its information.
      const features = this.map.queryRenderedFeatures(event.point, {
        layers: ['places-to-avoid'] // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];
      const coord = feature['geometry'];
      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(coord.coordinates[0][0])
        .setHTML(
          `<h3>${feature.properties.name}</h3><p>${feature.properties.description}</p>`
        )
        .addTo(this.map);
    });

  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LayerPage,
      cssClass: 'my-custom-class',
      componentProps: {map: this.map},
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
  }

  public switchDarkTheme(value: boolean): void {
    this.darkTheme = value;
    if (!this.darkTheme) {
      this.map.setStyle('mapbox://styles/ionitaandrei/ckws2p07b1i4d15nvmxbnp7dy');
    } else {
      this.map.setStyle('mapbox://styles/ionitaandrei/ckwsfk2pk59at16p3zg67dzgy');
    }
  }

}
