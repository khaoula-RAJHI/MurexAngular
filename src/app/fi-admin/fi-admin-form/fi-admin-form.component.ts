import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/departement/departement';
import { DepartementService } from 'src/app/departement/departement.service';
import { Mission } from 'src/app/mission/mission';
import { MissionService } from 'src/app/mission/mission.service';
import { Tache } from 'src/app/tache/tache';
import { TacheService } from 'src/app/tache/tache.service';
import { FiAdmin } from '../fi-admin';
import { FiAdminService } from '../fi-admin.service';

@Component({
  selector: 'app-fi-admin-form',
  templateUrl: './fi-admin-form.component.html',
  styleUrls: ['./fi-admin-form.component.css']
})
export class FiAdminFormComponent implements OnInit{
  fiAdmin: FiAdmin;
  public missions: Mission[] = [];
  public taches: Tache[] = [];
  public departements: Departement[] = [];


  constructor(
    private missionService: MissionService,
    private tacheService: TacheService,
    private departementService: DepartementService,
    private route: ActivatedRoute, 
      private router: Router, 
        private fiAdminService: FiAdminService) {
    this.fiAdmin = new FiAdmin();
  }

  ngOnInit(): void {
    this.getMissions();
    this.getTaches();
    this.getDepartements();
  }

  public getMissions(): void {
    this.missionService.getMissions().subscribe(
      (response: Mission[]) => {
        this.missions = response;
        console.log(this.missions);
      }
    );
  }

  public getTaches(): void {
    this.tacheService.getTaches().subscribe(
      (response: Tache[]) => {
        this.taches = response;
        console.log(this.taches);
      }
    );
  }

  public getDepartements(): void {
    this.departementService.getDepartements().subscribe(
      (response: Departement[]) => {
        this.departements = response;
        console.log(this.departements);
      }
    );
  }
  
  onSubmit() {
    this.fiAdminService.save(this.fiAdmin).subscribe(result => this.gotoFiAdmintList());
  }

  gotoFiAdmintList() {
    this.router.navigate(['/menu']);
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    this.router.navigate(['/login']);
}
}
