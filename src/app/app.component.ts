import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PAGES } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages: string[] = PAGES;

  constructor(private router: Router) { }

  redirectionTo(chemin: string){
    this.router.navigate(['/' + chemin]);
  }
}
