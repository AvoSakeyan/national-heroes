import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmheroListComponent } from './armhero-list/armhero-list.component';
import { ArmenianheroesComponent } from './armenianheroes/armenianheroes.component';
import { AlertModule } from 'ngx-bootstrap';
import { OnHoverDirective } from './on-hover.directive';
@NgModule({
  declarations: [
    AppComponent,
    ArmheroListComponent,
    ArmenianheroesComponent,
    OnHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
