import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from './tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private clientUrl: string;

  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8091/taches';
  }

  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };
  
  public getTaches(): Observable<Tache[]> {
    return this.http.get<Tache[]>(this.clientUrl+"/retrieve-all-taches", this.options);
  }
  

  
    public save(tache: Tache) {
    return this.http.post<Tache>(this.clientUrl+"/add-tache", tache, this.options);
  }
 

  public modifyTache(tache:Tache):Observable<Tache> {
    return this.http.put<Tache>(this.clientUrl+"/modify-tache", tache, this.options);
  } 

  public deleteTache(idf_tache: number): Observable<void> {
    return this.http.delete<void>(`${this.clientUrl+"/remove-tache"}/${idf_tache}`, this.options);
  }

  public assign(tache: Tache,IDF_Mission: number) {
    return this.http.post<Tache>('${this.clientUrl+"/add-tache"}/${IDF_Mission}', tache, this.options);
  }
}

