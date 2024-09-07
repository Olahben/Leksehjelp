import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkToDoComponent } from './homework-to-do.component';

describe('HomeworkToDoComponent', () => {
  let component: HomeworkToDoComponent;
  let fixture: ComponentFixture<HomeworkToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeworkToDoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeworkToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
