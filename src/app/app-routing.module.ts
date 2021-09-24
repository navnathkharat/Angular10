import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { AddEmployeeComponent }  from './components/add-employee/add-employee.component';

const routes: Routes = [
  // { path:'', redirectTo:'employees', pathMatch:'full' },
  { path: 'employees', component: EmployeesListComponent },
  { path :'add-employee/:id', component: AddEmployeeComponent },
  { path :'edit-employee/:id', component: AddEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
