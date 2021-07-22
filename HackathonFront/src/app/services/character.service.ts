import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { passChar } from '../models/passChar';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private postURl = 'character';

  constructor(
    private http: HttpClient,
    ) {}

      createCharacter(char: passChar): Observable<Character>{
        return this.http.post<Character>(this.postURl, char); 
      }

}
