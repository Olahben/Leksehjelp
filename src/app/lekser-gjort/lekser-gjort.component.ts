import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LekserService } from '../services/lekser.service';
import { Lekse } from '../models/lekse';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-lekser-gjort',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './lekser-gjort.component.html',
  styleUrl: './lekser-gjort.component.scss'
})
export class LekserGjortComponent implements OnInit {
  homeworkList: Lekse[];

  constructor(lekseService: LekserService) {
    this.homeworkList = lekseService.HentFullforte();
  }


  ngOnInit(): void {
    // Perform initialization logic here
    // For example, you can make an API call or initialize variables
  }
}
