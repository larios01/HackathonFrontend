import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Description } from '../models/description';

@Injectable({
  providedIn: 'root'
})
export class UpdateDescriptionService {
  private urlUpdate: string;

  constructor(private http: HttpClient) {
    this.urlUpdate = "http://localhost:8080/character/" //might have to change
  }

  updateDecription(id: number, description: string): Observable<any> {

    return this.http.put<string>(this.urlUpdate + id + "/description", description);
  }
}
