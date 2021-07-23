import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
//import { Description } from '../models/description';

@Injectable({
  providedIn: 'root'
})
export class UpdateDescriptionService {
  private urlUpdate: string;

  constructor(private http: HttpClient) {
    this.urlUpdate = "http://localhost:8080/api/character" //might have to change
  }

  updateDecription(character:Character): Observable<Character> {

    return this.http.put<Character>(this.urlUpdate , character);
  }
}
