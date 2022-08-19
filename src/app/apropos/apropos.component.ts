import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Apropos } from './apropos';
import { AproposService } from './apropos.service';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent  implements OnInit {

 apropos : Observable<Apropos[]>;
 
 constructor(
   private aproposService: AproposService,
   private router: Router
   ) {}
   
   ngOnInit(){
     this.reloadData();
   }
 
  reloadData(){
     this.apropos = this.aproposService.getApropos();
   }
 
 /*deleteBus(idBus: number) {
   this.aproposService.deleteBus(idBus)
     .subscribe(
       data => {
         console.log(data);
         this.reloadData();
       },
       error => console.log(error));
 
 }*/

 onLogout() {
  localStorage.removeItem('token');
  localStorage.removeItem('email');

  this.router.navigate(['/login']);
}

}
