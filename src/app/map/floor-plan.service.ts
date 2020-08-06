import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FloorPlanService {
  FLOORS = [
    {name: 'Kælder', id: 'njals-1'},
    {name: 'Stue', id: 'njals-2'},
    {name: '1.', id: 'njals-3'},
    {name: '2.', id: 'njals-4'},
    {name: '3.', id: 'njals-5'},
    {name: '4.', id: 'njals-6'},
    {name: '5.', id: 'njals-7'}
  ];

  constructor() { }
}
