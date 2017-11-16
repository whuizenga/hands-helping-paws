import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MailService {

  private mailUrl = '/api/mail';

  constructor(private http: HttpClient) { }

  sendMessage(payload): Observable<any>{
    return this.http.post(this.mailUrl, payload);
  }
}
