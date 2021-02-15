import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaLibraryComponent } from './area-web-site/media-library/media-library.component';
import { FourOhFourComponent } from './area-web-site/four-oh-four/four-oh-four.component';
import { HomeComponent } from './area-web-site/home/home.component';
import { DetailUserCardComponent } from './area-web-site/media-library/view-media-library/detail-user-card/detail-user-card.component';

export const PAGES: string[] = ['home', 'bibliotheque', 'partiejdr'];
export const USERS: string[] = ['pathf','neo']; // a supprimer

const routes: Routes = [
  { path: PAGES[0], component: HomeComponent },
  { path: PAGES[1], component: MediaLibraryComponent },
  { path: PAGES[1] + '/' + USERS[0] , component: MediaLibraryComponent },
  { path: PAGES[1] + '/' + USERS[1] , component: MediaLibraryComponent },
  { path: PAGES[1] + '/detail' , component: DetailUserCardComponent },
  { path: '', component: HomeComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
