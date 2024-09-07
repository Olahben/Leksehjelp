import { Component } from '@angular/core';
import { HomeworkService } from '../services/homework.service';
import { Homework } from '../models/homework';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-lekser-gjort',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './lekser-gjort.component.html',
  styleUrl: './lekser-gjort.component.scss'
})
export class LekserGjortComponent {
  homeworkList: Homework[];

  constructor(lekseService: HomeworkService) {
    this.homeworkList = lekseService.GetFinished();
  }
}
