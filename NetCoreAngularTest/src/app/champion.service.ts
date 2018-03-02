import { Injectable } from '@angular/core';
import { Champion } from './champion';
//import { CHAMPIONS } from './mock-champions';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ChampionService {
  private championsUrl = 'api/champions';
  private championsValues: Champion[] = [];
  constructor(private messageService: MessageService, private http: HttpClient) { }

  private log(message: string) {
    this.messageService.add('ChampionsService: ' + message);
  }

  getChampions(): Observable<Champion[]> {
    //this.messageService.add('ChampionService: fetched champions');
    //return of(CHAMPIONS);
    return this.http.get<Champion[]>(this.championsUrl).pipe(
      tap(champions => this.log('fetched champions')),
      catchError(this.handleError('getChampions', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getChampion(id: number): Observable<Champion> {
    const url = `${this.championsUrl}/${id}`;
    return this.http.get<Champion>(url).pipe(
      tap(_ => this.log(`fetched champion id=${id}`)),
      catchError(this.handleError<Champion>(`getChampion id=${id}`))
    );
  }
}
