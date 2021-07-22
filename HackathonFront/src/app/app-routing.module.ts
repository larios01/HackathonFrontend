import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDescriptionComponent } from './update-description/update-description.component';

const routes: Routes = [

  {path:'updateDescription',component:UpdateDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
