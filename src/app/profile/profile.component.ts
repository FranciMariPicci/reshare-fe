import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { Item } from '../model/item.model';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { ItemType } from '../model/itemtype.model';
import { WishlistService } from '../services/wishlist.service';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, MatGridListModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  flipped = false;
  user : User|undefined;
  items: Item[] = [];
  myWishlist : ItemType[] = [];
  

  constructor(private userService: UserService, private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe(u => this.user = u);
    this.userService.getItems().subscribe((i : Item[]) => (this.items=i));
    this.wishlistService.getMyWishlist().subscribe((it: ItemType[]) => {this.myWishlist = it;})
  }
  
  toggleFlip() {
    this.flipped = !this.flipped;
  }

}
