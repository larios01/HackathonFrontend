import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Character } from '../models/character';
import { passChar } from '../models/passChar';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = 'http://localhost:8080/api/character';

  constructor(private http: HttpClient) {}


      createCharacter(char: passChar): Observable<Character>{
        return this.http.post<Character>(this.url, char); 

      }

      getCharacter(id:number):Observable<Character>{
             
         return this.http.get<Character>(this.url+"/"+id);
      }
      getAllCharacters(): Observable<Character[]>{
      
        return this.http.get<Character[]>(this.url); 
      }      
}
