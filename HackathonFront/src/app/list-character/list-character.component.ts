import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.css']
})
export class ListCharacterComponent implements OnInit {

  characterList?: Character[];

  constructor(
    private characterService: CharacterService
    ) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe(res =>{
      this.characterList = res;
    });
  }

  
}
