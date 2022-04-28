import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css']
})
export class LightSwitchComponent implements OnInit {

  lights: string[] = ['Rojo', 'Amarillo', 'Verde'];

  constructor() { }

  ngOnInit(): void {
  }

}
