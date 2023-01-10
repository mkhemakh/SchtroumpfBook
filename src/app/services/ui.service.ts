import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddSchtroumpf: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddSchtroumpf(): void {
    this.showAddSchtroumpf = !this.showAddSchtroumpf;
    this.subject.next(this.showAddSchtroumpf);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
