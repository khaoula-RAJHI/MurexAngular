import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Mission } from './mission';
import { MissionService } from './mission.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  public missions: Mission[] = [];
  public editMission?: Mission;
  public deleteMission?: Mission;

  constructor(private missionService: MissionService, private route: Router){
   
  }

  ngOnInit(): void {
    this.getMissions();
  }

  public getMissions(): void {
    this.missionService.getMissions().subscribe(
      (response: Mission[]) => {
        this.missions = response;
        console.log(this.missions);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        alert(error.message);
        alert("you are not allowed");
        this.route.navigateByUrl('/home');
      }
    );
  }

  public onAddMission(addForm: NgForm): void {
    document.getElementById('add-Mission-form')!.click();
    this.missionService.save(addForm.value).subscribe(
      (response: Mission) => {
        console.error
        console.log(response);
        this.getMissions();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateMission(mission: Mission) {
    this.missionService.modifyMission(mission).subscribe(
      (response: Mission) => {
        console.log(response);
        this.getMissions();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteMission(idf_Mission: number): void {
    this.missionService.deleteMission(idf_Mission).subscribe(() => { this.getMissions() });
  }
  public onOpenModal(mission: Mission, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editMission = mission;
      button.setAttribute('data-target', '#updateMissionModal');
    }
    if (mode === 'delete') {
      this.deleteMission = mission;
      button.setAttribute('data-target', '#deleteMissionModal');
    }
    if (mode === 'add') {

      button.setAttribute('data-target', '#addMissionModal');
    }
    container?.appendChild(button);
    button.click();
  }
}