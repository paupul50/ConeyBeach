import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesPricesComponent } from './rides-prices.component';

describe('RidesPricesComponent', () => {
  let component: RidesPricesComponent;
  let fixture: ComponentFixture<RidesPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidesPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
