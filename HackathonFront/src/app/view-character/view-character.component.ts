import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.css']
})
export class ViewCharacterComponent implements OnInit {

  public characterName?:string;

  public gender?:string;
  public hairColor?: string;
  public strength?:string;
  public intelligence?:string;
  public wisdom?: string;
  public dexterity?:string;
  public numToes?:string;
  public eyeColor?:string;
  public race?:string;
  public luck?: string;

  public description?:string;

  constructor() { }

  
  ngOnInit(): void {
  }

}
