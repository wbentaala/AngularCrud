import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private _id: number;
  employee: Employee;
  constructor(private _route: ActivatedRoute, 
              private _employeeService: EmployeeService,
              private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._id = +params['id'];
      this.employee = this._employeeService.getEmployee(this._id);
    });
  }

  viewNextEmployee(){
    const nbemp = this._employeeService.getEmployeesSize();
    console.log(nbemp);
    if(this._id < nbemp)
      this._id = this._id + 1;
    else 
      this._id = 1;
    this._router.navigate(['employees', this._id]);
  }

}
