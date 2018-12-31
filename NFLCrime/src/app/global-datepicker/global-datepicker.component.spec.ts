import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalDatepickerComponent } from './global-datepicker.component';

describe('GlobalDatepickerComponent', () => {
  let component: GlobalDatepickerComponent;
  let fixture: ComponentFixture<GlobalDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
