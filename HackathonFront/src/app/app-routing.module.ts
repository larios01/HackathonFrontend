import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { ListCharacterComponent } from './list-character/list-character.component';
import { UpdateDescriptionComponent } from './update-description/update-description.component';
import { ViewCharacterComponent } from './view-character/view-character.component';

const routes: Routes = [
  { path: '', redirectTo: '/listCharacter', pathMatch: 'full' },
  {path:'listCharacter',component:ListCharacterComponent},
  {path:'createCharacter',component:CreateCharacterComponent},
  {path:'updateDescription',component:UpdateDescriptionComponent},
  {path:'viewCharacter/:id',component:ViewCharacterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
