import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tache } from './tache';
import { TacheService } from './tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {

  public taches: Tache[] = [];
  public editTache?: Tache;
  public deleteTache?: Tache;

  constructor(private tacheService: TacheService, private route: Router){
   
  }

  ngOnInit(): void {
    this.getTaches();
  }

  public getTaches(): void {
    this.tacheService.getTaches().subscribe(
      (response: Tache[]) => {
        this.taches = response;
        console.log(this.taches);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        alert(error.message);
        alert("you are not allowed");
        this.route.navigateByUrl('/home');
      }
    );
  }

  public onAddTache(addForm: NgForm): void {
    document.getElementById('add-Tache-form')!.click();
    this.tacheService.save(addForm.value).subscribe(
      (response: Tache) => {
        console.error
        console.log(response);
        this.getTaches();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateTache(tache: Tache) {
    this.tacheService.modifyTache(tache).subscribe(
      (response: Tache) => {
        console.log(response);
        this.getTaches();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteTache(idf_tache: number): void {
    this.tacheService.deleteTache(idf_tache).subscribe(() => { this.getTaches() });
  }
  public onOpenModal(tache: Tache, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editTache = tache;
      button.setAttribute('data-target', '#updateTacheModal');
    }
    if (mode === 'delete') {
      this.deleteTache = tache;
      button.setAttribute('data-target', '#deleteTacheModal');
    }
    if (mode === 'add') {

      button.setAttribute('data-target', '#addTacheModal');
    }
    container?.appendChild(button);
    button.click();
  }
}