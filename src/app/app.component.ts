import { Component, OnInit  } from '@angular/core';
import { Satellite } from './satellite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          console.log(fetchedSatellites);
          let objectLength = Object.keys(fetchedSatellites).length
          console.log (objectLength);
          for (let i=0; i<objectLength; i++){
          let satellite=new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
         this.sourceList.push(satellite[i]);
         
          }
 
       }.bind(this));
    }.bind(this));
 
 }
}
