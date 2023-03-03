import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAdComponent } from './components/acerca-de/edit-ad.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillsComponent } from './components/hyss/edit-skills.component';
import { NewSkillsComponent } from './components/hyss/new-skills.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'educacion/:id', component: EditEducacionComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'nuevahys', component: NewSkillsComponent},
  {path: 'edithys/:id', component: EditSkillsComponent},
  {path: 'editad/:id', component: EditAdComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
