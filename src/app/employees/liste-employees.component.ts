import { Component, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-employees',
  templateUrl: './liste-employees.component.html',
  styleUrls: ['./liste-employees.component.css']
})
export class ListeEmployeesComponent implements OnInit {

  arr: number[] = [1, 2, 3];
  employees: Employee[];
  name: string;
  constructor(private _employeeService : EmployeeService, 
              private _router: Router) {
    
   }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  handleClick(employee: Employee){
    this._router.navigate(['employees', employee.id]);
  }

}
