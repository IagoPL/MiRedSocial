import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/tarea-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input() item: any  
  // TODO: mirar de poner que sea User, buscar como importarlo

  constructor() {}

  ngOnInit(): void {}
}
