import { Component } from '@angular/core';
import { HomeworkService } from '../services/homework.service';
import { Homework } from '../models/homework';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-homework-done',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './homework-done.component.html',
  styleUrl: './homework-done.component.scss'
})
export class HomeworkDoneComponent {
  homeworkList: Homework[];

  constructor(lekseService: HomeworkService) {
    this.homeworkList = lekseService.GetFinished();
  }
}
