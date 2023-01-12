import { Component, OnInit } from '@angular/core';
import { SchtroumpfService } from '../../services/schtroumpf.service';
import { Schtroumpf } from '../../Schtroumpf';

@Component({
  selector: 'app-schtroumpfs',
  templateUrl: './schtroumpfs.component.html',
  styleUrls: ['./schtroumpfs.component.css'],
})
export class SchtroumpfsComponent implements OnInit {
  schtroumpfs: Schtroumpf[] = [];

  constructor(private schtroumpfService: SchtroumpfService) {}

  ngOnInit(): void {
    this.schtroumpfService.getSchtroumpfs().subscribe((schtroumpfs) => (this.schtroumpfs = schtroumpfs));
  }

  deleteSchtroumpf(schtroumpf: Schtroumpf) {
    this.schtroumpfService
      .deleteSchtroumpf(schtroumpf)
      .subscribe(
        () => (this.schtroumpfs = this.schtroumpfs.filter((t) => t.id !== schtroumpf.id))
      );
  }

  addSchtroumpf(schtroumpf: Schtroumpf) {
    this.schtroumpfService.addSchtroumpf(schtroumpf).subscribe((schtroumpf) => this.schtroumpfs.push(schtroumpf));
  }
}
