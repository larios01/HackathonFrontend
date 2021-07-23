import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { passChar } from '../models/passChar';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = 'http://localhost:8080/api/character';

  constructor(private http: HttpClient) {}


      createCharacter(char: Character): Observable<Character>{
        return this.http.post<Character>(this.url, char); 

      }

      getCharacter(id:number):Observable<Character>{
        let char:Character = { id: 1,
          name:"random name",
          gender: "M",
          hairColor: "red",
          eyeColor: "green",
          race: "oblong",
          strength: 1,
          intelligence: 1,
          wisdom: 1,
          dexterity: 1,
          luck: 1,
          numOfToes: 1,
          description:"string"

        }
        return of(char);
        
        //this.http.get<Character>(this.url+"/"+id);
      }
      getAllCharacters(){
        return this.http.get<Character>(this.url); 
      }      
}
