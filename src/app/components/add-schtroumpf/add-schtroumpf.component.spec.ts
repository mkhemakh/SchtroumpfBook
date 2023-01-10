import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSchtroumpfComponent } from './add-schtroumpf.component';

describe('AddSchtroumpfComponent', () => {
  let component: AddSchtroumpfComponent;
  let fixture: ComponentFixture<AddSchtroumpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSchtroumpfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSchtroumpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
