import { Component, OnInit } from '@angular/core';
import { AmpSetting } from '../amp-setting';

@Component({
  selector: 'app-amp-settings',
  templateUrl: './amp-settings.component.html',
  styleUrls: ['./amp-settings.component.css']
})
export class AmpSettingsComponent implements OnInit {

  setting: AmpSetting = {
    amplifier: '5150',
    description: 'Early Van Halen brown sound',
    title: '1976 Brown Sound'
  };

  constructor() { }

  ngOnInit(): void {


  }

}
