import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Page } from '../model/page.model';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  url: string = "http://localhost:8080/page";

  constructor(private http: HttpClient) {}

  createPage(page: Page): Observable<Page> {
    return this.http.post<Page>(this.url, page);
  }

  getAllPages(): Observable<Page> {
    return this.http.get<Page>(this.url);
  }

  getPageById(id: String): Observable<Page> {
    return this.http.get<Page>(this.url + "/" + id);
  }

  deletePage(id: string): Observable<Page> {
    return this.http.delete<Page>(this.url + "/" + id);
  }
}
