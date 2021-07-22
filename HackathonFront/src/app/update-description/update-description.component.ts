import { Component, OnInit } from '@angular/core';
//import { Description } from '../models/description';
import { UpdateDescriptionService } from '../services/update-description.service';

@Component({
  selector: 'app-update-description',
  templateUrl: './update-description.component.html',
  styleUrls: ['./update-description.component.css']
})
export class UpdateDescriptionComponent implements OnInit {
  // description: Description;
  
  //Description in the backend is a string within character model
  description:string ='';

  constructor(private service:UpdateDescriptionService) { 
   // this.description= new Description();
  }

  ngOnInit(): void {
  }

  updateDescription():void{
    //this.service.updateDecription(this.description).subscribe(res=>{
     // this.description=new Description();
      
   // })
  }

}
