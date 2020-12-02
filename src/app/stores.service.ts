import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  getStores():Observable<any> {
    return this.http.get('/assets/json/store.json');
  }
}
