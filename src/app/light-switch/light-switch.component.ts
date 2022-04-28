import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css']
})
export class LightSwitchComponent implements OnInit {

  lights: string[] = ['rojo', 'amarillo', 'verde'];

  selectedOption: string = 'rojo';
  showColor: string = '';

  onOff: boolean = false;

  constructor( public fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  changecheck(){
    !this.onOff;
  }

  changeColor(){
    this.showColor = this.selectedOption;
  }
}
