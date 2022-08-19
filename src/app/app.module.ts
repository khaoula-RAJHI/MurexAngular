import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { StatutConsultationComponent } from './statut-consultation/statut-consultation.component';
import { SoustraitantComponent } from './soustraitant/soustraitant.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { MissionComponent } from './mission/mission.component';
import { TacheComponent } from './tache/tache.component';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetComponent } from './reset/reset.component';
import { UserComponent } from './user/user.component';
import { BlacklistComponent } from './blacklist/blacklist.component';
import { FiAdminFormComponent } from './fi-admin/fi-admin-form/fi-admin-form.component';
import { AproposComponent } from './apropos/apropos.component';
import { FIClientComponent } from './ficlient/ficlient.component';
import { ListfiComponent } from './listfi/listfi.component';
import { DepartementComponent } from './departement/departement.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClientComponent,
    StatutConsultationComponent,
    ConsultantComponent,
    SoustraitantComponent,
    MissionComponent,
    TacheComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetpasswordComponent,
    ResetComponent,
    UserComponent,
    BlacklistComponent,
    FiAdminFormComponent,
    AproposComponent,
    FIClientComponent,
    ListfiComponent,
    DepartementComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
