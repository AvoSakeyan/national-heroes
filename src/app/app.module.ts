import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmheroListComponent } from './armhero-list/armhero-list.component';
import { ArmenianheroesComponent } from './armenianheroes/armenianheroes.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArmheroListComponent,
    ArmenianheroesComponent,
    EditModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
