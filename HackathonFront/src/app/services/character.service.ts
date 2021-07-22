import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = 'localhost:8080/api/character';

  constructor(private http: HttpClient) {}

      createCharacter(char: Character): Observable<Character>{
        return this.http.post<Character>(this.url, char); 
      }

      getCharacter(id:number):Observable<Character>{
        return this.http.get<Character>(this.url+"/"+id);
      }
      getAllCharacters(){
        return this.http.get<Character>(this.url); 
      }      
}
