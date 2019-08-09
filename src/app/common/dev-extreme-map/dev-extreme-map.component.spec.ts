import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevExtremeMapComponent } from './dev-extreme-map.component';

describe('DevExtremeMapComponent', () => {
  let component: DevExtremeMapComponent;
  let fixture: ComponentFixture<DevExtremeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevExtremeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevExtremeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
