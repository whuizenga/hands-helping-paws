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

  Adoptions = [];

  Modal = {
    age: "",
    breeds: [],
    description: "",
    lastUpdate: "",
    media: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
    mix: "",
    name: "",
    options: [],
    sex: "",
    size: "",
    status: ""
  };

  ngOnInit() {
    this.getCats();
  }

  openModal(event, adoption): void {
    this.Modal = adoption;
    var modal = document.getElementById("adoption-modal");

    modal.style.display = "block";
    
  }

  closeModal(event): void {
    var modal = document.getElementById("adoption-modal");

    modal.style.display = "none";
  }

  getCats(): void {
    this.adoptionsSevice.getCats().subscribe((cats) => {
      cats.pet.map((cat) => {
        var newCat = {
          age: "",
          breeds: [],
          description: "",
          lastUpdate: "",
          media: [],
          mix: "",
          name: "",
          options: [],
          sex: "",
          size: "",
          status: ""
        };
        newCat.age = cat.age.$t;
        newCat.breeds = cat.breeds.breed.map((breed) => {
          return breed.$t
        });
        newCat.description = cat.description.$t;
        newCat.lastUpdate = cat.lastUpdate.$t;
        if (cat.media.photos){
          newCat.media = cat.media.photos.photo[2].$t;
        } else {
          newCat.media = ["https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"];
        }
        newCat.mix = cat.mix.$t;
        newCat.name = cat.name.$t;
        newCat.options = cat.options.option.map((option) => {
          return option.$t
        });
        if (cat.sex.$t === "M"){
          newCat.sex = "Male"
        } else if (cat.sex.$t === "F"){
          newCat.sex = "Female"
        } else {
          newCat.sex = cat.sex.$t;
        }
        if (cat.size.$t === "L"){
          newCat.size = "Large"
        } else if (cat.size.$t === "M"){
          newCat.size = "Medium"
        } else if (cat.size.$t === "S"){
          newCat.size = "Small"
        } else {
          newCat.size = cat.size.$t;
        }
        newCat.status = cat.status.$t;

        this.Adoptions.push(newCat);
      });
    });
  }
}
