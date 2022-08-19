import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FIClient } from './ficlient';
import { FiclientService } from './ficlient.service';

@Component({
  selector: 'app-ficlient',
  templateUrl: './ficlient.component.html',
  styleUrls: ['./ficlient.component.css']
})
export class FIClientComponent implements OnInit {

  ficlient : FIClient;
  constructor( private route: ActivatedRoute, 
    private router: Router, 
      private ficlientService: FiclientService) { 
        this.ficlient = new FIClient();
      }

  ngOnInit(): void {
  }

  onSubmit() {
    this.ficlientService.save(this.ficlient).subscribe((data: any)=>{JSON.parse(JSON.stringify(data))
      alert("votre demande a été ajoutée avec succès !")
      this.router.navigate(['/ficlient']);

  },error=>{
    alert("votre demande n'a pas été ajoutée correctement!")
    console.log(error)
    this.router.navigate(['/ficlient']);

  
  }
  );
}

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    this.router.navigate(['/login']);
}

}
