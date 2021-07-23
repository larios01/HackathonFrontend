import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Character } from '../models/character';
import { CharacterService } from '../services/character.service';
import { UpdateDescriptionService } from '../services/update-description.service';
//import { Description } from '../models/description';

@Component({
  selector: 'app-update-description',
  templateUrl: './update-description.component.html',
  styleUrls: ['./update-description.component.css']
})
export class UpdateDescriptionComponent implements OnInit {
  @Input() characterId:number = 0;  
  // description: Description;

  //Description in the backend is a string within character model
  description:string ='';
  character:Character = {
    id:0, name: "", gender: "", hairColor: "", eyeColor: "",
  race: "", strength: 0, intelligence: 0, wisdom: 0, dexterity: 0, luck: 0,
  numOfToes: -1
  }

  constructor(private service:UpdateDescriptionService, private charService:CharacterService, private activatedRoute:ActivatedRoute) { 
   // this.description= new Description();
   this.activatedRoute.queryParams.subscribe(params => {
    this.characterId = params['id'];
    // console.log(date); // Print the parameter to the console. 
});
  }

  ngOnInit(): void {
  }

  updateDescription():void{
    // const myObserver= {
    //   next: (response: any) => console.log(response),
        
    //   error: (error: Error) => console.log(error)
    // };
    const myObserver = {
      next: (response: Character) => {
        response.description = this.description;
        this.service.updateDecription(response).subscribe(myObserver);
      
    },
      error: (error: Error) => console.log("huh" ,error)
    };
    console.log("this hit ", this.characterId);
    this.charService.getCharacter(this.characterId).subscribe(myObserver)
    console.log(this.character);
  }


}
