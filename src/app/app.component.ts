import { Component } from '@angular/core';
import { User } from './models/tarea-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: User[] = [];
  flag: boolean = false;
  nom: any = this.users;
  counter: number = 0;
  constructor() {
    const UsersJSON: string = `{
      "usuaris": [
      {
      "nom": "Pere",
      "cognoms": "Porras",
      "edat": 25,
      "descripcio": "Soltero super guapo y morenote",
      "correu": "pporras@gmail.com",
      "clau": "123456"
      },
      {
      "nom": "alejandro",
      "cognoms": "Porras",
      "edat": 25,
      "descripcio": "Soltero super guapo y morenote",
      "correu": "pporras@gmail.com",
      "clau": "123456"
      },
      {
      "nom": "Pere",
      "cognoms": "Porras",
      "edat": 25,
      "descripcio": "Soltero super guapo y morenote",
      "correu": "pporras@gmail.com",
      "clau": "123456"
      },
      {
      "nom": "alejandro",
      "cognoms": "Porras",
      "edat": 25,
      "descripcio": "Soltero super guapo y morenote",
      "correu": "pporras@gmail.com",
      "clau": "123456"
      },
      {
      "nom": "Pilar",
      "cognoms": "Ponas",
      "edat": 18,
      "descripcio": "Soltera amable y simpática",
      "correu": "pponas@gmail.com",
      "clau": "123456"
      }
      ]
      }`;

    const UsersDict: any = JSON.parse(UsersJSON);
    this.users = UsersDict['usuaris'];
  }

  // cambia el flag para que muestre un panel o otro

  increaseCounterer() {
    
    this.counter++;
  
    
  }

  showData() {
    return (this.flag = true);
  }
  // cambia el flag para que muestre un panel o otro
  hideData() {
    return (this.flag = false);
  }

  changeFlag(){
    
    
    this.flag = !this.flag;

  }

  upload(user: any) {
    this.counter = 0;
    this.flag = false;
    this.users.push(user);
  }

  motrarjson(){
    console.log(this.users);
    
  }

}
