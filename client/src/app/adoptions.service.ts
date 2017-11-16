import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Injectable()
export class AdoptionsService {

  private adoptionsUrl = 'api/adoptions';

  constructor(private http: HttpClient) { }

  getCats(): Observable<any>{
    // axios.get('/api/adoptions').then((res) => {
    //   console.log(res.data.pet);
    // })
    return this.http.get(this.adoptionsUrl);
  }
}
