import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromTasks from './tasks';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home.component';

const enableTracing = true && !environment.production;

const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent}
    ]},
  {path: 'tasks',
    children: [
      {path: '', component: fromTasks.TaskListComponent, pathMatch: 'full'},
      {path: 'new', component: fromTasks.TaskNewComponent},
      {path: ':task_id', component: fromTasks.TaskDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing,
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

