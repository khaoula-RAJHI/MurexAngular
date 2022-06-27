import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from './tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private clientUrl: string;

  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8075/SpringMVC/taches';
  }

  public getTaches(): Observable<Tache[]> {
    return this.http.get<Tache[]>(this.clientUrl+"/retrieve-all-taches");
  }
  

  
    public save(tache: Tache) {
    return this.http.post<Tache>(this.clientUrl+"/add-tache", tache);
  }
 

  public modifyTache(tache:Tache):Observable<Tache> {
    return this.http.put<Tache>(this.clientUrl+"/modify-tache", tache);
  } 

  public deleteTache(idf_tache: number): Observable<void> {
    return this.http.delete<void>(`${this.clientUrl+"/remove-tache"}/${idf_tache}`);
  }
}

