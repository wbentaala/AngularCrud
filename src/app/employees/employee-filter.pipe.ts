import { PipeTransform, Pipe } from "@angular/core";
import { Employee } from "../models/employee.model";

@Pipe({
    name: 'employeeFilter', 
    pure: true
})
export class EmployeeFilterPipe implements PipeTransform{
    i: number = 0;
    transform(employees: Employee[], searchTerm: string): Employee[] {
        this.i++;
        console.log(this.i);
        if(!employees || !searchTerm){
            return employees;
        }
        else{
            return employees.filter(e=>
                e.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            
        }

    }

}