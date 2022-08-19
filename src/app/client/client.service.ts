import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientUrl: string;

  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8091/client';
  }

  
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientUrl+"/retrieve-all-clients", this.options);
  }
  

  
    public save(client: Client) {
    return this.http.post<Client>(this.clientUrl+"/add-client", client, this.options);
  }
 

  public modifyClient(client:Client):Observable<Client> {
    return this.http.put<Client>(this.clientUrl+"/modify-client", client, this.options);
  } 

  public deleteClient(NumClient: number): Observable<void> {
    return this.http.delete<void>(`${this.clientUrl+"/remove-client"}/${NumClient}`, this.options);
  }
}

