import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blacklist } from './blacklist';

@Injectable({providedIn: 'any'})
export class BlacklistService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)};

  public getBlacklist(): Observable<Blacklist[]> {
    console.log(this.options);
    return this.http.get<Blacklist[]>(`${this.apiServerUrl}/blacklist/getAllBlacklist`, this.options);
  }
  public addBlacklist(blacklist: Blacklist): Observable<Blacklist> {
    console.log(blacklist)
    return this.http.post<Blacklist>(`${this.apiServerUrl}/blacklist/addUserToBlacklist`, blacklist, this.options);
  }

  public deleteBlacklist(id: string | undefined = ''): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/blacklist/deleteUserFromBlacklist/${id}`, this.options);
  }
}
