import { Component } from '@angular/core';
import { Homework } from '../models/homework';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeworkService } from '../services/homework.service';
import { NgFor, CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-homework-to-do',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, CommonModule, NgIf],
  templateUrl: './homework-to-do.component.html',
  styleUrl: './homework-to-do.component.scss'
})
export class HomeworkToDoComponent {
  homeworkForm: FormGroup;
  homeworkList: Homework[];

  constructor(private fb: FormBuilder, private homeworkService: HomeworkService) {
    this.homeworkForm = this.fb.group({
      fag: ['', Validators.required],
      innleveringsdato: ['', Validators.required],
      beskrivelse: ['', Validators.required]
    });
    this.homeworkList = homeworkService.GetUnfinished();
    console.log(this.homeworkList);
  }

  ShowModal() {
    const element = document.getElementById("add-homework") as HTMLDialogElement;
    element.showModal();
  }

  closeModal() {
    const element = document.getElementById("add-homework") as HTMLDialogElement;
    element.close();
  }

  onSubmit(): void {
    if (this.homeworkForm.valid) {
      const homeworkData = this.homeworkForm.value;
      this.homeworkService.CreateHomework(homeworkData.fag, homeworkData.innleveringsdato, homeworkData.beskrivelse);
      this.closeModal();
      this.homeworkList = this.homeworkService.GetUnfinished();
    } else {
      console.log('Form is invalid');
    }
  }

  finishHomework(id: number): void {
    this.homeworkService.MarkAsFinished(id);
    this.homeworkList = this.homeworkService.GetUnfinished();
  }
}


