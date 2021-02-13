import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.scss']
})
export class BibliothequeComponent implements OnInit {
  title = 'Liste des utilisateurs :';
  listNumber: number[] = [0,1];

  constructor() { }

  ngOnInit(): void {
  }

}
