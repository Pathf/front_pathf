import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listUserTestPossession } from '../../models/constant/example';
import { UserPossession } from '../../models/userPossession';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-carte-bibliotheque',
  templateUrl: './carte-bibliotheque.component.html',
  styleUrls: ['./carte-bibliotheque.component.scss']
})
export class CarteBibliothequeComponent implements OnInit {
  userCard: UserPossession;

  @Input() numUser: number;

  constructor(public router: Router, public http: HttpClient) { }

  ngOnInit(): void {
    this.userCard = listUserTestPossession[this.numUser];
  }

  redirectionToUser() {
    let chemin = 'bibliotheque/' + this.userCard.name.toLowerCase();
    this.router.navigate([chemin]);
  }

  redirectionToTypeUser(type: string) {
    this.router.navigate(['/' + this.userCard.name.toLowerCase() + '/' + type]);
  }

  

  test(){
    console.log('Test');
    let test = 'http://localhost:8080/userpossession';
    this.http.get(test).pipe(map(data =>{
      console.log('test');
      console.log(data);
      return null;
    })).subscribe();
    /*subscribe(data => {
      console.log(data);
    });*/
  }
}

class Test {
  name : string;
  listByType : string;
}