import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpSettingsComponent } from './amp-settings.component';

describe('AmpSettingsComponent', () => {
  let component: AmpSettingsComponent;
  let fixture: ComponentFixture<AmpSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmpSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
