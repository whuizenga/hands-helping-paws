import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class AdoptionsService {

  constructor() { }

  getCats() {
    let cats = {}
    axios.get("http://api.petfinder.com/shelter.getPets?key=27da77ea3227fa6606883384d99fda4e&id=OK252&format=json").then((res) => {
      cats = res.data;
    })
    return cats;
  }
}
