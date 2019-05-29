import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

export interface Page<T> {
  totalPages: number,
  data: T[]
}


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles$(page = 1, limit = 5): Observable<Page<any>> {
    return this.http.get<any[]>(`${apiUrl}/articles`, {
      observe:'response',
      params: {
        _page: page.toString(),
        _limit: limit.toString()
      }
    }).pipe(
      map((res: HttpResponse<any>) => ({
          totalPages: Math.ceil(+res.headers.get('x-total-count') / limit),
          data: res.body
        }))
    );
  }
}
