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
  name: string = "";
  role: string = "";
  email: string = "";
  pass: string = "";
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
    if (!this.name) {
      alert('Please add a schtroumpf!');
      return;
    }

    const newSchtroumpf: Schtroumpf = {
      name: this.name,
      role: this.role,
      email: this.email,
      pass: this.pass,
      friends: []
    };

    this.onAddSchtroumpf.emit(newSchtroumpf);

    this.name = '';
    this.role = '';
    this.email = '';
    this.pass = '';
  }
}