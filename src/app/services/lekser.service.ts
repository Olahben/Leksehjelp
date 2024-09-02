import { Injectable } from '@angular/core';
import { ILekseService } from '../models/serviceInterfaces/lekser.model';
import { Lekse } from '../models/lekse';

@Injectable({
  providedIn: 'root'
})
export class LekserService implements ILekseService {

  private storageKey = 'lekser';

  constructor() { }

  Laglekse(lekse: Lekse): void {
    const homeworkList = this.HentAlle();
    homeworkList.push(lekse);
    localStorage.setItem(this.storageKey, JSON.stringify(homeworkList));
  }

  HentAlle(): Lekse[] {
    const homeworkListJson = localStorage.getItem(this.storageKey);
    return homeworkListJson ? JSON.parse(homeworkListJson) : [];
  }

  Hent(id: number): Lekse {
    const homeworkList = this.HentAlle();
    return homeworkList.find(lekse => lekse.id === id)!;
  }

  HentUferdige(): Lekse[] {
    return this.HentAlle().filter(lekse => !lekse.fullfort);
  }

  HentFullforte(): Lekse[] {
    return this.HentAlle().filter(lekse => lekse.fullfort);
  }

  MarkerFullfort(id: number): void {
    const homeworkList = this.HentAlle();
    const lekse = homeworkList.find(lekse => lekse.id === id);
    if (lekse) {
      lekse.fullfort = true;
      this.OppdaterLekse(lekse);
    }
  }

  OppdaterLekse(updatedLekse: Lekse): void {
    const homeworkList = this.HentAlle();
    const index = homeworkList.findIndex(lekse => lekse.id === updatedLekse.id);
    if (index !== -1) {
      homeworkList[index] = updatedLekse;
      localStorage.setItem(this.storageKey, JSON.stringify(homeworkList));
    }
  }
}
