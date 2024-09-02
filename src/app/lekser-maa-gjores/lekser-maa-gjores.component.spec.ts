import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekserMaaGjoresComponent } from './lekser-maa-gjores.component';

describe('LekserMaaGjoresComponent', () => {
  let component: LekserMaaGjoresComponent;
  let fixture: ComponentFixture<LekserMaaGjoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LekserMaaGjoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LekserMaaGjoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
