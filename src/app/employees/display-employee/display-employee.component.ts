import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})

export class DisplayEmployeeComponent implements OnInit {
  
  @Input() 
  employee: Employee;

  constructor() { }

  ngOnInit() {
  }

  public getEmployeeInfos(): string{
    return this.employee.name + " " + this.employee.gender;
  }

}
