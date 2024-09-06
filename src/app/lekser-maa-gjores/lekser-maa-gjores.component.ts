import { Component } from '@angular/core';
import { Lekse } from '../models/lekse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LekserService } from '../services/lekser.service';

@Component({
  selector: 'app-lekser-maa-gjores',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './lekser-maa-gjores.component.html',
  styleUrl: './lekser-maa-gjores.component.scss'
})
export class LekserMaaGjoresComponent {
  homeworkForm: FormGroup;

  constructor(private fb: FormBuilder, private lekserService: LekserService) {
    this.homeworkForm = this.fb.group({
      fag: ['', Validators.required],
      innleveringsdato: ['', Validators.required],
      beskrivelse: ['', Validators.required]
    });
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
      this.lekserService.Laglekse(homeworkData.fag, homeworkData.innleveringsDato, homeworkData.beskrivelse);
      console.log("success");
    } else {
      console.log('Form is invalid');
    }
  }
}


