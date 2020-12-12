import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AmpSetting } from '../amp-setting';
//import { NpKnob } from '@navelpluisje/np-knob';
//const NpKnob = require('@navelpluisje/np-knob');
// @ts-ignore
//import * as NpKnob from '@navelpluisje/np-knob';

//declare let NpKnob: any;

@Component({
  selector: 'app-amp-detail',
  templateUrl: './amp-detail.component.html',
  styleUrls: ['./amp-detail.component.css']
})
export class AmpDetailComponent implements OnInit {

  @Input() setting: AmpSetting;

  currentSetting: AmpSetting;

  constructor() { }  

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    this.currentSetting.amplifier = "AMP";
    //const knob1 = new NpKnob('knob1', { min: 0, max: 10 });

  }

}
