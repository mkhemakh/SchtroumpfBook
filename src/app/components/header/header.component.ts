import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Schtroumpfs';
  showAddSchtroumpf: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddSchtroumpf = value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
     // Unsubscribe to ensure no memory leaks
     this.subscription.unsubscribe();
   }

  toggleAddSchtroumpf() {
    this.uiService.toggleAddSchtroumpf();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
