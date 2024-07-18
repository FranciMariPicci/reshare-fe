import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  private apiUrl = 'http://localhost:8080/add-item';
  constructor(private http: HttpClient) { }

  saveItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }
}
