import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcnewAccountIdComponent } from './btcnew-account-id.component';

describe('BtcnewAccountIdComponent', () => {
  let component: BtcnewAccountIdComponent;
  let fixture: ComponentFixture<BtcnewAccountIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtcnewAccountIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcnewAccountIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
