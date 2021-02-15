import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-library',
  templateUrl: './media-library.component.html',
  styleUrls: ['./media-library.component.scss']
})
export class MediaLibraryComponent implements OnInit {
  title = 'Liste des utilisateurs :';
  listNumber: number[] = [0,1];

  constructor() { }

  ngOnInit(): void {
  }

}
