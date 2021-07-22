import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharModel } from './char-model';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private postURl = 'character';

  constructor(
    private http: HttpClient,
    ) {}

      createCharacter(char: CharModel): Observable<CharModel>{
        return this.http.post<CharModel>(this.postURl, char); 
      }

}
