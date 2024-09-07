import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkDoneComponent } from './homework-done.component';

describe('HomeworkDoneComponent', () => {
  let component: HomeworkDoneComponent;
  let fixture: ComponentFixture<HomeworkDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeworkDoneComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeworkDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
