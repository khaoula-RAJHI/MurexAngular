import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from './departement';
import { DepartementService } from './departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  public departements: Departement[] = [];
  public editDepartement?: Departement;
  public deleteDepartement?: Departement;

  constructor(private departementService: DepartementService, private route: Router){
   
  }

  ngOnInit(): void {
    this.getDepartements();
  }

  public getDepartements(): void {
    this.departementService.getDepartements().subscribe(
      (response: Departement[]) => {
        this.departements = response;
        console.log(this.departements);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        alert(error.message);
        alert("you are not allowed");
        this.route.navigateByUrl('/home');
      }
    );
  }

  public onAddDepartement(addForm: NgForm): void {
    document.getElementById('add-Departement-form')!.click();
    this.departementService.save(addForm.value).subscribe(
      (response: Departement) => {
        console.error
        console.log(response);
        this.getDepartements();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateDepartement(departement: Departement) {
    this.departementService.modifyDepartement(departement).subscribe(
      (response: Departement) => {
        console.log(response);
        this.getDepartements();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteDepartement(idf_Departement: number): void {
    this.departementService.deletDepartement(idf_Departement).subscribe(() => { this.getDepartements() });
  }
  public onOpenModal(departement: Departement, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editDepartement = departement;
      button.setAttribute('data-target', '#updateDepartementModal');
    }
    if (mode === 'delete') {
      this.deleteDepartement = departement;
      button.setAttribute('data-target', '#deleteDepartementModal');
    }
    if (mode === 'add') {

      button.setAttribute('data-target', '#addDepartementModal');
    }
    container?.appendChild(button);
    button.click();
  }
  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    this.route.navigate(['/login']);
}

}

