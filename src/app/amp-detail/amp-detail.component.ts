import { Component, Input, OnInit } from '@angular/core';
import { AmpSetting } from '../amp-setting';

@Component({
  selector: 'app-amp-detail',
  templateUrl: './amp-detail.component.html',
  styleUrls: ['./amp-detail.component.css']
})
export class AmpDetailComponent implements OnInit {

  @Input() setting: AmpSetting;

  constructor() { }  

  ngOnInit(): void {
    
  }

}
