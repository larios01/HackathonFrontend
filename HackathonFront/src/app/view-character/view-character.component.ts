import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.css']
})
export class ViewCharacterComponent implements OnInit {

  public editDescription:boolean = false;

  public characterName?: string;

  public gender?: string;
  public hairColor?: string;
  public strength?: number;
  public intelligence?: number;
  public wisdom?: number;
  public dexterity?: number;
  public numOfToes?: number;
  public eyeColor?: string;
  public race?: string;
  public luck?: number;

  public description?: string;

  constructor(private location: Location, private router: ActivatedRoute, private characterService: CharacterService) { }


  ngOnInit(): void {

    //Get the id of the character from the url so that we can fetch data
    let characterIdString = this.router.snapshot.paramMap.get('id');
    let characterId: number = 0;
    if (characterIdString != null) {
      characterId = parseInt(characterIdString);
    }
    const myObserver = {
      next: (response: Character) => {
        this.characterName = response.name;
        this.gender = response.gender;
        this.hairColor = response.hairColor
        this.eyeColor = response.eyeColor;
        this.race = response.race;
        this.strength = response.strength;
        this.intelligence = response.intelligence;
        this.wisdom = response.wisdom;
        this.dexterity = response.dexterity;
        this.luck = response.luck;
        this.numOfToes = response.numOfToes;
        this.description = response.description;
      },
      error: (error: Error) => console.log(error)
    };


    this.characterService.getCharacter(1).subscribe(myObserver);
  }

  goBack(): void {
    this.location.back();
  }
  editCharacterDescription():void{
    this.editDescription = true;
  }
}
