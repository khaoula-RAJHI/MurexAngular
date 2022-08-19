import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Blacklist } from './blacklist';
import { BlacklistService } from './blacklist.service';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {

  public blacklists: Blacklist[] = [];
  public deleteBlacklist?: Blacklist;


  constructor(private blacklistService: BlacklistService, private route: Router){
   
  }

  ngOnInit(): void {
    this.getBlacklist();
  }

  public getBlacklist(): void {
    this.blacklistService.getBlacklist().subscribe(
      (response: Blacklist[]) => {
        this.blacklists = response;
        console.log(this.blacklists);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        //alert(error.message);
        alert("you are not allowed");
        this.route.navigateByUrl('/menu');
      }
    );
  }

  public onDeleteBlacklist(id: string | undefined = ''): void {
    this.blacklistService.deleteBlacklist(id).subscribe(() => { this.getBlacklist() });
  }

  public onAddBlacklist(addForm: NgForm): void {
    document.getElementById('add-blacklist-form')!.click();
    this.blacklistService.addBlacklist(addForm.value.email).subscribe(
      (response: any) => {
        console.log(response);
        this.getBlacklist();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public searchBlacklist(key: string): void {
    console.log(key);
    const results: Blacklist[] = [];
    for (const blacklist of this.blacklists) {
      if ( blacklist.email.toLowerCase().indexOf(key.toLowerCase()) !== -1)
       {
        results.push(blacklist);
      }
    }
    this.blacklists = results;
    if (results.length === 0 || !key) {
     this.getBlacklist();
     //alert("No user Found");  

    }

  }

  public onOpenModal(blacklist: Blacklist, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'delete') {
      this.deleteBlacklist = blacklist;
      button.setAttribute('data-target', '#deleteBlacklistModal');
    }
    if (mode === 'add') {

      button.setAttribute('data-target', '#addBlacklistModal');
    }
    container?.appendChild(button);
    button.click();
  }

}