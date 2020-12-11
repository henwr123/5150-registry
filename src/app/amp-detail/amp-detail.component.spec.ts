import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpDetailComponent } from './amp-detail.component';

describe('AmpDetailComponent', () => {
  let component: AmpDetailComponent;
  let fixture: ComponentFixture<AmpDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmpDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
