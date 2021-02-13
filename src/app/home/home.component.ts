import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Maj } from './../models/maj';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  majs: Maj[] = [];

  constructor(public http: HttpClient) {
    this.majs[0] = new Maj('MAJ 0.2 du 31/01/2021 :','Faut que sa tape l\'api pour que j\'ai les données des mises à jour.');
  }

  ngOnInit(): void {
  }

}
