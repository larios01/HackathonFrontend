import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewCharacterComponent } from './view-character/view-character.component';
import { ListCharacterComponent } from './list-character/list-character.component';
import { UpdateDescriptionComponent } from './update-description/update-description.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewCharacterComponent,
    ListCharacterComponent,
    UpdateDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
