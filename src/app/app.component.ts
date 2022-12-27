import { Component } from '@angular/core';
import { User } from './models/tarea-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listas: string[] = [];
  Users: User[];

  constructor() {
    const UsersJSON: string = `{
      "UserList": [{
        "name": "Sofia",
        "lastName": "Rodrigo",
        "years": "40",
        "img": "https://imgs.search.brave.com/GPL0x7y0elbJb9bRboGzy3jZlkSUiDDJTnLIOgv8k0Q/rs:fit:480:328:1/g:ce/aHR0cDovL2ltYWdl/cy5yZWRldHYudW9s/LmNvbS5ici9zaXRl/cmVkZXR2L2dydXBv/cy9qb3JuYWxpc21v/L3JlZGV0dmlub3Rp/Y2lhcy9ub3RpY2lh/cy9pbWFnZXMvZ3Jh/bmRlcy81MzQxNzIu/anBn",
        "description": "no se que poner",
        "email": "sofiii@gmail.com",
        "password" : "capybara123"
      
      }
      ]
    }`;

    const UsersDict: any = JSON.parse(UsersJSON);
    this.Users = UsersDict['Users'];

   
  }
}
