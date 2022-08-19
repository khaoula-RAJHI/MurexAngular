import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from './registration.service';
import { User } from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:User = new User();
  constructor(private registerService: RegistrationService,
    private route: Router) { }

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe((data: any)=>{JSON.parse(JSON.stringify(data))
     alert("Successfully User is register?")
     console.log(data)
     this.route.navigate(['/user']);
    },error=>{
      alert("Sorry User not registred please try later")
      console.log(error)
      this.route.navigate(['/login']);

    
    }
      
    );
    
  }

}
