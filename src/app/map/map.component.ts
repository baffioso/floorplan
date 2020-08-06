import { Component, OnInit } from '@angular/core';
import { Floor } from '../interfaces/interfaces';
import { FloorPlanService } from './floor-plan.service';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  floors: Floor[];
  currentFloor = {name: 'Kælder', id: 'njals-1'};

  constructor(private mapService: MapService, private planService: FloorPlanService) { }

  ngOnInit(): void {
    this.floors = this.planService.FLOORS;
    this.mapService.createMap();
  }

  selectedFloor(level: Floor) {
    console.log(level.id);
    this.mapService.removeLayer(this.currentFloor.id);
    this.mapService.addLayer(level.id);
    this.currentFloor = level;
  }

  clearMap() {
    this.mapService.removeLayer(this.currentFloor.id);
  }

}
