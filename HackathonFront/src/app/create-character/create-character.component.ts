import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { CharModel } from '../char-model';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  constructor() { }

  character?: CharModel;

  ngOnInit(): void {
  }

  onSubmit(){

    (<HTMLInputElement>document.getElementById("gender")).value;
    (<HTMLInputElement>document.getElementById("hairColor")).value;
    (<HTMLInputElement>document.getElementById("eyes")).value;
    (<HTMLInputElement>document.getElementById("race")).value;


  }
  Save(){
    
  }
}


