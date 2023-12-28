import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './componentes/nav/nav.component';
import { HomeComponent } from './componentes/home/home.component';
import { TecnicoListComponent } from './componentes/tecnico/tecnico-list/tecnico-list.component';

const routes: Routes = [
  {
    path: '', component : NavComponent, children:[
        {path: 'home', component: HomeComponent},
        {path: 'tecnicos', component: TecnicoListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
