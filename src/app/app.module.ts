import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; 
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibliothequeComponent } from './partie-bibliotheque/bibliotheque/bibliotheque.component';
import { CarteBibliothequeComponent } from './partie-bibliotheque/carte-bibliotheque/carte-bibliotheque.component';
import { HomeComponent } from './home/home.component';
import { FourOhFourComponent } from './area-web-site/four-oh-four/four-oh-four.component';
import { DetailCarteBibliothequeComponent } from './partie-bibliotheque/detail-carte-bibliotheque/detail-carte-bibliotheque.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BibliothequeComponent,
    CarteBibliothequeComponent,
    HomeComponent,
    FourOhFourComponent,
    DetailCarteBibliothequeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
