import { CreateEmployeeComponent } from "../employees/create-employee.component";
import { CanDeactivate } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Component, Injectable } from "@angular/core";

@Injectable()
export class CreateEmployeeCanDeactivatGuardService implements CanDeactivate<CreateEmployeeComponent>{
    canDeactivate(component: CreateEmployeeComponent): boolean{
        if(component.createEmployeeForm.dirty){
            return confirm("Are you sure you want to discard this changes?");
        }
        return true;
    }
}