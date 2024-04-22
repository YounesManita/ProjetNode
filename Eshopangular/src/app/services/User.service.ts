import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    console.log(email);
    
    return this.http.post<any>('http://localhost:5000/user/login', { email, password });
  }

 }
