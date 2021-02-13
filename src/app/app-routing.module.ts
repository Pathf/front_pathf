import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibliothequeComponent } from './partie-bibliotheque/bibliotheque/bibliotheque.component';
import { FourOhFourComponent } from './area-web-site/four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import { DetailCarteBibliothequeComponent } from './partie-bibliotheque/detail-carte-bibliotheque/detail-carte-bibliotheque.component';

export const PAGES: string[] = ['home', 'bibliotheque', 'partiejdr'];
export const USERS: string[] = ['pathf','neo']; // a supprimer

const routes: Routes = [
  { path: PAGES[0], component: HomeComponent },
  { path: PAGES[1], component: BibliothequeComponent },
  { path: PAGES[1] + '/' + USERS[0] , component: BibliothequeComponent },
  { path: PAGES[1] + '/' + USERS[1] , component: BibliothequeComponent },
  { path: PAGES[1] + '/detail' , component: DetailCarteBibliothequeComponent },
  { path: '', component: HomeComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
