import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reservation } from '../models/reservation.model';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class reservationservice {

  constructor(private http: HttpClient) { }

  getAll(): Observable<reservation[]> {
    return this.http.get<reservation[]>(baseUrl);
  }

  get(id: any): Observable<reservation> {
    return this.http.get<reservation>(`${baseUrl}/${id}`);
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

  findByTitle(title: any): Observable<reservation[]> {
    return this.http.get<reservation[]>(`${baseUrl}?title=${title}`);
  }
}