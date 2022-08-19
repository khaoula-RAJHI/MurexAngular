import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FIClient } from './ficlient';

@Injectable({
  providedIn: 'root'
})
export class ListfiService {

  
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };
  
  public getFIClients(): Observable<FIClient[]> {
    return this.http.get<FIClient[]>(this.apiServerUrl+"/FIClient/retrieve-all-FIclients", this.options);
  }
  

  
    public save(ficlient: FIClient) {
    return this.http.post<FIClient>(this.apiServerUrl+"/FIClient/add-FIclient", ficlient, this.options);
  }
 

  public modifyClient(client:FIClient):Observable<FIClient> {
    return this.http.put<FIClient>(this.apiServerUrl+"/FIClient/modify-FIclient", client, this.options);
  } 

  public deleteClient(NumFIClient: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl+"/FIClient/remove-FIclient"}/${NumFIClient}`, this.options);
  }
}
