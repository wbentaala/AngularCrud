import { Employee } from "../models/employee.model";
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export class EmployeeService{
    private employees = [
        {
          id: 1,
          name: 'Mark',
          gender: 'Male',
          contactPreference: 'Email',
          email: 'mark@pragimtech.com',
          dateOfBirth: new Date('10/25/1988'),
          department: '3',
          isActive: true,
          photoPath: 'assets/images/mark.png', 
          password: null
        },
        {
          id: 2,
          name: 'Mary',
          gender: 'Female',
          contactPreference: 'Phone',
          phoneNumber: 2345978640,
          dateOfBirth: new Date('11/20/1979'),
          department: '2',
          isActive: true,
          photoPath: 'assets/images/mary.png',
          password: null
        },
        {
          id: 3,
          name: 'John',
          gender: 'Male',
          contactPreference: 'Phone',
          phoneNumber: 5432978640,
          dateOfBirth: new Date('3/25/1976'),
          department: '3',
          isActive: false,
          photoPath: 'assets/images/john.png',
          password: null
        },
      ];
      getEmployees(): Observable<Employee[]>{
          return of(this.employees).pipe(delay(2000));
      }

      getEmployee(employeeId: number) : Employee{
        console.log(employeeId);
        return this.employees.find(e=>e.id===employeeId);
      }

      save(employee: Employee){
        this.employees.push(employee);
      }

      getEmployeesSize(): number{
        return this.employees.length;
      }
}