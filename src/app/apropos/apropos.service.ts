import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Apropos } from './apropos';

@Injectable({
  providedIn: 'root'
})
export class AproposService {
  private apropostUrl: string;

  constructor(private http: HttpClient) {
    this.apropostUrl = 'http://localhost:8091/apropos';
  }

  
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };

  public getApropos(): Observable<Apropos[]> {
    return this.http.get<Apropos[]>(this.apropostUrl+"/retrieve-all-apropos", this.options);
  }
  

  
    public save(apropos: Apropos) {
    return this.http.post<Apropos>(this.apropostUrl+"/add-apropos", apropos, this.options);
  }
 

  public modifyApropos(apropos:Apropos):Observable<Apropos> {
    return this.http.put<Apropos>(this.apropostUrl+"/modify-apropos", apropos, this.options);
  } 

  public deleteApropos(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apropostUrl+"/remove-apropos"}/${id}`, this.options);
  }
}
