import { Injectable } from '@angular/core';
import { IHomeworkService } from '../models/serviceInterfaces/homeworkService.model';
import { Homework } from '../models/homework';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService implements IHomeworkService {

  private storageKey = 'lekser';

  constructor() { }

  CreateHomework(className: string, handInDate: Date, description: string): void {
    let id: number = Date.now();
    let newHomework: Homework = {
      id: id,
      className: className,
      handInDate: handInDate,
      description: description,
      finished: false
    };
    const homeworkList = this.GetAll();
    homeworkList.push(newHomework);
    localStorage.setItem(this.storageKey, JSON.stringify(homeworkList));
  }

  GetAll(): Homework[] {
    if (typeof window !== "undefined") {
      const homeworkListJson = localStorage.getItem(this.storageKey);
      return homeworkListJson ? JSON.parse(homeworkListJson) : [];
    } else {
      return [];
    }
  }

  Get(id: number): Homework {
    const homeworkList = this.GetAll();
    return homeworkList.find(homework => homework.id === id)!;
  }

  GetUnfinished(): Homework[] {
    return this.GetAll().filter(homework => homework.finished);
  }

  GetFinished(): Homework[] {
    return this.GetAll().filter(homework => homework.finished);
  }

  MarkAsFinished(id: number): void {
    const homeworkList = this.GetAll();
    const homework = homeworkList.find(homework => homework.id === id);
    if (homework) {
      homework.finished = true;
      this.UpdateHomework(homework);
    }
  }

  UpdateHomework(updatedHomework: Homework): void {
    const homeworkList = this.GetAll();
    const index = homeworkList.findIndex(homework => homework.id === updatedHomework.id);
    if (index !== -1) {
      homeworkList[index] = updatedHomework;
      localStorage.setItem(this.storageKey, JSON.stringify(homeworkList));
    }
  }
}
