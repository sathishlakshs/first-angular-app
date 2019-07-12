import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfillComponent } from './unfill.component';

describe('UnfillComponent', () => {
  let component: UnfillComponent;
  let fixture: ComponentFixture<UnfillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
