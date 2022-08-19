import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { StatutConsultationComponent } from './statut-consultation/statut-consultation.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { MenuComponent } from './menu/menu.component';
import { SoustraitantComponent } from './soustraitant/soustraitant.component';
import { MissionComponent } from './mission/mission.component';
import { TacheComponent } from './tache/tache.component';
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



const routes: Routes = [
  {path:"client", component: ClientComponent},
  {path:"statutConsultation", component: StatutConsultationComponent},
  {path:"consultant", component: ConsultantComponent},
  {path:"menu", component: MenuComponent},
  {path:"soustraitant", component: SoustraitantComponent},
  {path:"mission", component: MissionComponent},
  {path:"registration", component: RegistrationComponent},
  {path:"login", component: LoginComponent},
  {path:"forgetpass", component: ForgetpasswordComponent},
  {path:"reset", component: ResetComponent},
  {path:"user", component: UserComponent},
  {path:"tache", component: TacheComponent},
  {path:"blacklist", component: BlacklistComponent},
  {path:"FIAd", component: FiAdminFormComponent},
  {path:"apropos", component: AproposComponent},
  {path:"ficlient", component: FIClientComponent},
  {path:"listfi", component: ListfiComponent},
  {path:"departement", component: DepartementComponent},
  






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
