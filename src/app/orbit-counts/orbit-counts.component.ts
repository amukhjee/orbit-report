import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }
  countByType(searchTerm: string):number{
    let matchingSatellitestype: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i=0; i < this.satellites.length; i++) {
       let type = this.satellites[i].type.toLowerCase();
       if (type.indexOf(searchTerm) >= 0) {
          matchingSatellitestype.push(this.satellites[i]);
       }
    }
return matchingSatellitestype.length;
}

countByorbitType(searchTerm: string):number{
  let matchingSatellitesorbittype: Satellite[] = [];
  searchTerm = searchTerm.toLowerCase();
  for(let i=0; i < this.satellites.length; i++) {
     let orbittype = this.satellites[i].orbitType.toLowerCase();
     if (orbittype.indexOf(searchTerm) >= 0) {
        matchingSatellitesorbittype.push(this.satellites[i]);
     }
  }
return matchingSatellitesorbittype.length;
}
}
