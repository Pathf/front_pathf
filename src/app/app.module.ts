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
import { MediaLibraryComponent } from './area-web-site/media-library/media-library.component';
import { UserCardComponent } from './area-web-site/media-library/view-media-library/user-card/user-card.component';
import { HomeComponent } from './area-web-site/home/home.component';
import { FourOhFourComponent } from './area-web-site/four-oh-four/four-oh-four.component';
import { DetailUserCardComponent } from './area-web-site/media-library/view-media-library/detail-user-card/detail-user-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MediaLibraryComponent,
    UserCardComponent,
    HomeComponent,
    FourOhFourComponent,
    DetailUserCardComponent
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
