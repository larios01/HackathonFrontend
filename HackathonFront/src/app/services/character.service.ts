import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private postURl = 'character';

  constructor(
    private http: HttpClient,
    ) {}

      createCharacter(char: Character): Observable<Character>{
        return this.http.post<Character>(this.postURl, char); 
      }

}
