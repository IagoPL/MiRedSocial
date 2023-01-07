import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/tarea-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input() item: any = "";
  thisItem: any = this.item;


  constructor() {}

 
  ngOnInit(): void {
    console.log(this.item)
  }
}
