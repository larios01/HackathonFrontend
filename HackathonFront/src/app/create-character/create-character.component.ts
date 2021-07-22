import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { CharModel } from '../char-model';
import { passChar } from '../models/passChar';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  character: passChar = {gender: "", hairColor: "", eyeColor: "",
  race: "", strength: 0, intelligent: 0, wisdom: 0, dexterity: 0, luck: 0,
  numOfToes: -1};

  ngOnInit(): void {

  }

  onSubmit(){


    (<HTMLInputElement>document.getElementById("gender")).value;
    (<HTMLInputElement>document.getElementById("hairColor")).value;
    (<HTMLInputElement>document.getElementById("eyes")).value;
    (<HTMLInputElement>document.getElementById("race")).value;


  }
  Save(){
    

   // this.character.race=(<HTMLInputElement>document.getElementById("race")).value;
  //  this.character.strength=Number((<HTMLInputElement>document.getElementById("strength")).value);
  //  this.character.intelligent=Number((<HTMLInputElement>document.getElementById("intelligent")).value);
   // this.character.wisdom=Number((<HTMLInputElement>document.getElementById("wisdom")).value);
   // this.character.dexterity=Number((<HTMLInputElement>document.getElementById("dexterity")).value);
   // this.character.luck=Number((<HTMLInputElement>document.getElementById("luck")).value);
   // this.character.numOfToes=Number((<HTMLInputElement>document.getElementById("toeNum")).value);
    // this.characterService.createCharacter(this.character).subscribe(res => {
    //  console.log(this.character);
    // });

  }
}
