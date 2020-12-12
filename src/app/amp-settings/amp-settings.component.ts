import { Component, OnInit } from '@angular/core';
import { AmpSetting } from '../amp-setting';
import { SETTINGS } from '../mock-amp-settings';

@Component({
  selector: 'app-amp-settings',
  templateUrl: './amp-settings.component.html',
  styleUrls: ['./amp-settings.component.css']
})
export class AmpSettingsComponent implements OnInit {

  settings = SETTINGS;

  selectedSetting: AmpSetting;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(setting: AmpSetting): void {
    this.selectedSetting = setting;
  }

}
