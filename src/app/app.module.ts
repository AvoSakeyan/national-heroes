import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { RoutingModule } from './routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import {NewModuleModule} from './new-module/new-module.module';






@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    NameEditorComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RoutingModule,
    RoutingModule,
    ReactiveFormsModule,
    NewModuleModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
