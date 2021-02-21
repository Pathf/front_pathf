import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usersContents } from '../../../../models/constant/example';
import { map } from 'rxjs/operators';
import { UserContent } from 'src/app/models/usersContent';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  userCard: UserContent;

  @Input() numUser: number;

  constructor(public router: Router, public http: HttpClient) { }

  ngOnInit(): void {
    this.userCard = usersContents[this.numUser];
  }

  redirectionToUser() {
    let chemin = 'bibliotheque' + this.userCard.nameUser.toLowerCase();
    this.router.navigate([chemin], );
  }

  redirectionToTypeUser(type: string) {
    this.router.navigate(['/' + this.userCard.nameUser.toLowerCase() + '/' + type]);
  }

  test(){
    console.log('Test');
    let test = 'http://localhost:8080/userpossession';
    this.http.get(test).pipe(map(data =>{
      console.log('test');
      console.log(data);
      return null;
    })).subscribe();
  }
}

class Test {
  name : string;
  listByType : string;
}