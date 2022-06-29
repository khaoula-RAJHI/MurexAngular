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


const routes: Routes = [
  {path:"client", component: ClientComponent},
  {path:"statutConsultation", component: StatutConsultationComponent},
  {path:"consultant", component: ConsultantComponent},
  {path:"menu", component: MenuComponent},
  {path:"soustraitant", component: SoustraitantComponent},
  {path:"mission", component: MissionComponent},
  {path:"tache", component: TacheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
