import { Validator, AbstractControl } from "@angular/forms";
import { Directive } from "@angular/core";

Directive({
    selector: "appSelectValidator"
})
export class SelectRequiredValidatorDirective implements Validator{
    validate(control: AbstractControl) : {[ key: string]: any} | null{
        return control.value === '-1' ? {'defaultSelected': true}: null;
    }
}