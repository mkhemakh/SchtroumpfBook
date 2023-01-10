import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Schtroumpf } from '../../Schtroumpf';

@Component({
  selector: 'app-add-schtroumpf',
  templateUrl: './add-schtroumpf.component.html',
  styleUrls: ['./add-schtroumpf.component.css'],
})
export class AddSchtroumpfComponent implements OnInit {
  @Output() onAddSchtroumpf: EventEmitter<Schtroumpf> = new EventEmitter();
  text: string = "";
  role: string = "";
  reminder: boolean = false;
  showAddSchtroumpf: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddSchtroumpf = value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
        // Unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

  onSubmit() {
    if (!this.text) {
      alert('Please add a schtroumpf!');
      return;
    }

    const newSchtroumpf: Schtroumpf = {
      text: this.text,
      role: this.role,
      reminder: this.reminder,
    };

    this.onAddSchtroumpf.emit(newSchtroumpf);

    this.text = '';
    this.role = '';
    this.reminder = false;
  }
}