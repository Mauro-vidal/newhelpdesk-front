import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './componentes/nav/nav.component';
import { HomeComponent } from './componentes/home/home.component';
import { TecnicoListComponent } from './componentes/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { TecnicoCreateComponent } from './componentes/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './componentes/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './componentes/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteListComponent } from './componentes/cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './componentes/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './componentes/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './componentes/cliente/cliente-delete/cliente-delete.component';
import { ChamadoListComponent } from './componentes/chamado/chamado-list/chamado-list.component';
import { ChamadoCreateComponent } from './componentes/chamado/chamado-create/chamado-create.component';
import { ChamadoUpdateComponent } from './componentes/chamado/chamado-update/chamado-update.component';
import { ChamadoReadComponent } from './componentes/chamado/chamado-read/chamado-read.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component : NavComponent, canActivate: [AuthGuard], children:[
        {path: 'home', component: HomeComponent},

        {path: 'tecnicos', component: TecnicoListComponent},
        {path: 'tecnicos/create', component: TecnicoCreateComponent},
        {path: 'tecnicos/update/:id', component: TecnicoUpdateComponent},
        {path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent},

        {path: 'clientes', component: ClienteListComponent},
        {path: 'clientes/create', component: ClienteCreateComponent},
        {path: 'clientes/update/:id', component: ClienteUpdateComponent},
        {path: 'clientes/delete/:id', component: ClienteDeleteComponent},

        {path: 'chamados', component: ChamadoListComponent},
        {path: 'chamados/create', component: ChamadoCreateComponent},
        {path: 'chamados/update/:id', component: ChamadoUpdateComponent},
        {path: 'chamados/read/:id', component: ChamadoReadComponent},
        
         
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

