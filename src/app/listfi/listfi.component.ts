import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FIClient } from './ficlient';
import { ListfiService } from './listfi.service';

@Component({
  selector: 'app-listfi',
  templateUrl: './listfi.component.html',
  styleUrls: ['./listfi.component.css']
})
export class ListfiComponent implements OnInit {

  public listfi: FIClient[] = [];
  public editListfi?: FIClient;
 // public deleteUser?: User;
 
 

  constructor(private listfiService: ListfiService, private route: Router){
   
  }

  ngOnInit(): void {
    this.getFIClient();
  }

  public getFIClient(): void {
    this.listfiService.getFIClients().subscribe(
      (response: FIClient[]) => {
        this.listfi = response;
        console.log(this.listfi);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        //alert(error.message);
        alert("you are not allowed");
        this.route.navigateByUrl('/menu');
      }
    );
  }

  public onUpdateListfi(listfi: FIClient) {
    this.listfiService.modifyClient(listfi).subscribe(
      (response: FIClient) => {
        console.log(response);
        this.getFIClient();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
 

  public onOpenModal(listfi: FIClient, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editListfi = listfi;
      button.setAttribute('data-target', '#updateUserModal');
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
