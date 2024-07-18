import { Component, OnInit } from '@angular/core';
import { LastItemsService} from '../services/last-items.service';
import { RouterModule } from '@angular/router';
import { Item } from '../model/item.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-last-items',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './last-items.component.html',
  styleUrl: './last-items.component.css'
})

export class LastItemsComponent implements OnInit{
  items : Item[] = [];
  pars : [boolean, number] = [true, 10];
  constructor(private lastItemsService : LastItemsService, private userService : UserService){}
  ngOnInit(): void {
    this.lastItemsService.getLastItems(this.pars).subscribe((is: Item[]) => (this.items = is.filter(i=>i.ownerEmail!=localStorage.getItem('userEmail'))));
  }
}
