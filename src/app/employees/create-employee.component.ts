import { Employee } from './../models/employee.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from '../services/employee.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  gender = 'male';
  contact = 'email';
  isActive = true;
  department = '3';
  photoPath = 'assets/images/mark.png';
  hidden_yn: boolean = true;
  preview_value: string = "Show Preview";
  dateOfBirth: Date = new Date();
  departments: Department[] = [
    {id: 1, name: "Help Desk"},
    {id: 2, name: "HR"},
    {id: 3, name: "IT"},
    {id: 4, name: "Paroll"}
  ];
  employee: Employee = {
    id: null, 
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: null, 
    isActive: null,
    photoPath: this.photoPath, 
    password: null
  };
  @ViewChild('employeeForm') 
  public createEmployeeForm: NgForm;
  
  constructor(private _employeeService: EmployeeService,
              private _router: Router) { 
    this.datePickerConfig = Object.assign({}, 
      {
        containerClass: 'theme-dark-blue', 
        showWeekNumbers: false 
      });
      
  }

  ngOnInit() {
  }

  saveEmployee(): void{
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }

  showPreview(){
    this.hidden_yn = !this.hidden_yn;
    if(this.hidden_yn)
      this.preview_value = "Show Preview";
    else
      this.preview_value = "Hide Preview"
  }

}
