import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEndingComponent } from './section-ending.component';

describe('SectionEndingComponent', () => {
  let component: SectionEndingComponent;
  let fixture: ComponentFixture<SectionEndingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionEndingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionEndingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
