import { Component } from '@angular/core';
import { Lekse } from '../models/lekse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LekserService } from '../services/lekser.service';
import { NgFor, CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-lekser-maa-gjores',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, CommonModule, NgIf],
  templateUrl: './lekser-maa-gjores.component.html',
  styleUrl: './lekser-maa-gjores.component.scss'
})
export class LekserMaaGjoresComponent {
  homeworkForm: FormGroup;
  homeworkList: Lekse[];

  constructor(private fb: FormBuilder, private lekserService: LekserService) {
    this.homeworkForm = this.fb.group({
      fag: ['', Validators.required],
      innleveringsdato: ['', Validators.required],
      beskrivelse: ['', Validators.required]
    });
    this.homeworkList = lekserService.HentUferdige();
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
      this.lekserService.Laglekse(homeworkData.fag, homeworkData.innleveringsdato, homeworkData.beskrivelse);
      console.log("success");
    } else {
      console.log('Form is invalid');
    }
  }

  finishHomework(id: number): void {
    this.lekserService.MarkerFullfort(id);
    this.homeworkList = this.lekserService.HentUferdige();
  }
}


