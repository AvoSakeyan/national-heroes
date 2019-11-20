import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmheroListComponent } from './armhero-list/armhero-list.component';
import { ArmenianheroesComponent } from './armenianheroes/armenianheroes.component';
import { AlertModule } from 'ngx-bootstrap';
import { DivHoverDirective } from './div-hover.diretive';
import { HeroesService } from './heroes.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArmheroListComponent,
    ArmenianheroesComponent,
    DivHoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule,
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
