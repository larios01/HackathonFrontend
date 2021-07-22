import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.css']
})
export class ViewCharacterComponent implements OnInit {

  public characterName?: string;

  public gender?: string;
  public hairColor?: string;
  public strength?: string;
  public intelligence?: string;
  public wisdom?: string;
  public dexterity?: string;
  public numToes?: string;
  public eyeColor?: string;
  public race?: string;
  public luck?: string;

  public description?: string;

  constructor(private location: Location, private router: ActivatedRoute, private characterService:CharacterService) { }


  ngOnInit(): void {

    //Get the id of the character from the url so that we can fetch data
    let characterIdString = this.router.snapshot.paramMap.get('id');
    let characterId: number = 0;
    if (characterIdString != null) {
      characterId = parseInt(characterIdString);
    }
  }
  
  goBack(): void {
    this.location.back();
  }
}
