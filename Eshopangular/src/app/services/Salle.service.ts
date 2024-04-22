import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salle } from '../models/Salle.model';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class Salleservice {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Salle[]> {
    return this.http.get<Salle[]>(baseUrl);
  }

  get(id: any): Observable<Salle> {
    return this.http.get<Salle>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Salle[]> {
    return this.http.get<Salle[]>(`${baseUrl}?title=${title}`);
  }
}