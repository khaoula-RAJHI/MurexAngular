import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Departement } from '../departement/departement';
import { Mission } from '../mission/mission';
import { Tache } from '../tache/tache';
import { FiAdmin } from './fi-admin';

@Injectable({
  providedIn: 'root'
})
export class FiAdminService {

  private fiAdmintUrl: string;
  private missiontUrl: string;
  private departementUrl: string;
  private tachetUrl: string;


  constructor(private http: HttpClient) {
    this.fiAdmintUrl = 'http://localhost:8091/fIAdmin';
    this.missiontUrl = 'http://localhost:8091/mission';
    this.departementUrl = 'http://localhost:8091/departement';
    this.tachetUrl = 'http://localhost:8091/tache';
  } 

  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };

  

  public getFIAdmins(): Observable<FiAdmin[]> {
    return this.http.get<FiAdmin[]>(this.fiAdmintUrl+"/retrieve-all-fIAdmins", this.options);
  }
  

  
    public save(fiAdmin: FiAdmin) {
    return this.http.post<FiAdmin>(this.fiAdmintUrl+"/add-fIAdmin", fiAdmin, this.options);
  }
 

  public modifyFiAdmin(fiAdmin:FiAdmin):Observable<FiAdmin> {
    return this.http.put<FiAdmin>(this.fiAdmintUrl+"/modify-fIAdmin",fiAdmin, this.options);
  } 

  public deleteFiAdmin(id: number): Observable<void> {
    return this.http.delete<void>(`${this.fiAdmintUrl+"/remove-fIAdmin"}/${id}`, this.options);
  }


  
  public getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.missiontUrl+"/retrieve-all-missions", this.options);
  }

  public getTaches(): Observable<Tache[]> {
    return this.http.get<Tache[]>(this.tachetUrl+"/retrieve-all-taches", this.options);
  }

  public getDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(this.departementUrl+"/retrieve-all-departements", this.options);
  }

  
}
