import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  constructor() { }

  gender:string='';
  female:string="Female";
  male:string="Male";
  other:string="Other"

  hairColor:string='';
  blonde:string="Blonde";
  brunette:string="Brunette";
  redHair:string="Red";
  brownHair:string="Brown"

  eyeColor:string='';
  blueEyes: string="Blue";
  brownEyes: string="Brown";
  greenEyes: string="Green";
  redEyes: string="Red";

  race:string='';
  human:string="Human";
  dwarf:string="Dwarf";
  elf:string="Elf";
  unicorn:string="Unicorn"
  
  ngOnInit(): void {
  }

}


