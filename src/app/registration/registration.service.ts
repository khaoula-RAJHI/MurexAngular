import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({providedIn: 'root'})
export class RegistrationService {
   private apiServerUrl= environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  registerUser(user: User): Observable<Object> {
     console.log(user);
     return this.http.post<string>(`${this.apiServerUrl}/registration`,user);
  }
}