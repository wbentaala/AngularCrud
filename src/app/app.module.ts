import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ListeEmployeesComponent } from './employees/liste-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

const appRoutes: Routes = [
  {path: 'list', component: ListeEmployeesComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListeEmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
