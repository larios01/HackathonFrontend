import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Description } from '../models/description';

@Injectable({
  providedIn: 'root'
})
export class UpdateDescriptionService {
private urlUpdate: string;

  constructor(private http:HttpClient) { 
    this.urlUpdate="http://localhost:9000/character/description" //might have to change
  }

  updateDecription(description:string):Observable<any>{

    return this.http.put<string>(this.urlUpdate,description);
  }
}