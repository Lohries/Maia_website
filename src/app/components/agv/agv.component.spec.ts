import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AGVComponent } from './agv.component';

describe('AGVComponent', () => {
  let component: AGVComponent;
  let fixture: ComponentFixture<AGVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AGVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AGVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
