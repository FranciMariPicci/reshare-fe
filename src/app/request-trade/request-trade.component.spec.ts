import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTradeComponent } from './request-trade.component';

describe('RequestTradeComponent', () => {
  let component: RequestTradeComponent;
  let fixture: ComponentFixture<RequestTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestTradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
