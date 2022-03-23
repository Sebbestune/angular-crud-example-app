import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'student', redirectTo: 'student/index', pathMatch: 'full'},
  { path: 'student/index', component: IndexComponent },
  { path: 'student/:studentId/view', component: ViewComponent },
  { path: 'student/create', component: CreateComponent },
  { path: 'student/:studentId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
