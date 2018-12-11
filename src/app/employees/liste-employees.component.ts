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
  private _searchTerm: string;
  get searchTerm(){
    return this._searchTerm;
  }
  set searchTerm(value: string){
    this._searchTerm = value;
    this.filtredEmployees = this.filterEmployees(this._searchTerm);
  }

  filtredEmployees: Employee[];
  constructor(private _employeeService : EmployeeService, 
              private _router: Router) {
    
   }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.filtredEmployees = this.employees;
  }

  filterEmployees(searchString: string): Employee[]{
    if(!this.employees || !searchString){
      return this.employees;
    }
    return this.employees.filter(e=>
      e.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  handleClick(employee: Employee){
    this._router.navigate(['employees', employee.id], {
      queryParams: { 'searchTerm': this.searchTerm, 'testParam': 'testValue'}
    });
  }

  changeName(){
    this.employees[0].name = 'Jordan';
    this.filtredEmployees = this.filterEmployees(this._searchTerm);
    // const newEmployees: Employee[] = Object.assign([], this.employees);
    // newEmployees[0].name = 'Jordan';
    // this.employees = newEmployees;
  }

}
