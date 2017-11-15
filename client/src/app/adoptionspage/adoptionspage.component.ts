import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdoptionsService } from '../adoptions.service';

@Component({
  selector: 'app-adoptionspage',
  templateUrl: './adoptionspage.component.html',
  styleUrls: ['./adoptionspage.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AdoptionspageComponent implements OnInit {

  constructor(private adoptionsSevice: AdoptionsService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.adoptionsSevice.getCats()
  }
}
