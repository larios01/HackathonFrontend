import { Component, OnInit, Input } from '@angular/core';
//import { Description } from '../models/description';
import { UpdateDescriptionService } from '../services/update-description.service';

@Component({
  selector: 'app-update-description',
  templateUrl: './update-description.component.html',
  styleUrls: ['./update-description.component.css']
})
export class UpdateDescriptionComponent implements OnInit {
  @Input() characterId:number = 1;  
  // description: Description;

  //Description in the backend is a string within character model
  description:string ='';

  constructor(private service:UpdateDescriptionService) { 
   // this.description= new Description();
  }

  ngOnInit(): void {
  }

  updateDescription():void{
    const myObserver= {
      next: (response: any) => console.log(response),
        
      error: (error: Error) => console.log(error)
    };
    this.service.updateDecription(this.characterId,this.description).subscribe(myObserver);
  }

}
