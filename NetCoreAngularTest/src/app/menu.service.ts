import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from './menuitem';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { TreeModel } from 'ng2-tree';
import { Jsonp, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MenuService implements OnInit {

  ngOnInit(): void {
    this.menuItems = this.getMenuItems();
  }
  private menuItemsUrl = 'api/menuitems';
  private menuItems: Observable<MenuItem>;
  constructor(private messageService: MessageService, private http: HttpClient) { }

  private log(message: string) {
    this.messageService.add('MenuItemsService: ' + message);
  }

  getMenuItems(entityType = "Client"): Observable<MenuItem> {
    return this.http.get<MenuItem>(this.menuItemsUrl).pipe(
      tap(menuItems => this.log('fetched menuitem')),
      catchError(this.handleError<MenuItem>(`get MenuItem`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
