import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekserGjortComponent } from './lekser-gjort.component';

describe('LekserGjortComponent', () => {
  let component: LekserGjortComponent;
  let fixture: ComponentFixture<LekserGjortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LekserGjortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LekserGjortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
