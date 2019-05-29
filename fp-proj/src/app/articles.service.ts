import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getAllArticles$() {
    return this.http.get<any[]>(`${apiUrl}/articles`, {
      headers: {
        Authorization: 'Bearer asdasdasdasdasdas'
      },
      params: {
        test1: "1",
        test2: "3"
      }
    });
  }
}
