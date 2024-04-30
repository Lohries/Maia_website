import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmoovComponentComponent } from './inmoov-component.component';

describe('InmoovComponentComponent', () => {
  let component: InmoovComponentComponent;
  let fixture: ComponentFixture<InmoovComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InmoovComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InmoovComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
