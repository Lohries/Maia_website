import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonkeyCarComponent } from './donkey-car.component';

describe('DonkeyCarComponent', () => {
  let component: DonkeyCarComponent;
  let fixture: ComponentFixture<DonkeyCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonkeyCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonkeyCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
