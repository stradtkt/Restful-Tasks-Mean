import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromTasks from './tasks';

const enableTracing = true && !environment.production;

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
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

