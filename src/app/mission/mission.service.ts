import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from './mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private missiontUrl: string;

  constructor(private http: HttpClient) {
    this.missiontUrl = 'http://localhost:8091/mission';
  }

  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };

  public getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.missiontUrl+"/retrieve-all-missions", this.options);
  }
  

  
    public save(mission: Mission) {
    return this.http.post<Mission>(this.missiontUrl+"/add-mission", mission, this.options);
  }
 

  public modifyMission(mission:Mission):Observable<Mission> {
    return this.http.put<Mission>(this.missiontUrl+"/modify-mission", mission, this.options);
  } 

  public deleteMission(idf_Mission: number): Observable<void> {
    return this.http.delete<void>(`${this.missiontUrl+"/remove-mission"}/${idf_Mission}`, this.options);
  }

  public ajouterEtAffecterMissionADepartement (mission: any,idf_Departement: any){
    return this.http.post(`${this.missiontUrl+"/add-mission"}/${idf_Departement}`, mission, this.options);
  }


}

