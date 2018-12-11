import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { ListeEmployeesComponent } from './employees/liste-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeeService } from './services/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee/display-employee.component';
import { CreateEmployeeCanDeactivatGuardService } from './services/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';

const appRoutes: Routes = [
  {
    path: 'list', 
    component: ListeEmployeesComponent
  },
  {
    path: 'create', 
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivatGuardService]
  },
  {
    path: 'employees/:id', 
    component: EmployeeDetailsComponent
  },
  {
    path: '', 
    redirectTo: '/list', 
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListeEmployeesComponent,
    CreateEmployeeComponent, 
    DisplayEmployeeComponent, 
    EmployeeDetailsComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [EmployeeService, 
              CreateEmployeeCanDeactivatGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
