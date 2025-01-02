import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

   export class PasswordValidator {
    // static method to create a validator function that checks for a strong password 
    static passwordStrength():ValidatorFn{
        // return a validator function that checks for a strong password 
        // the validator function takes a control object of type AbstractControl and returns a ValidationErrors object or null 
        return (control:AbstractControl):ValidationErrors | null =>{
            const value = control.value;
            // check if the password is empty
            if(!value){
                return null;
            }
            const hasNumber = /[0-9]/.test(value);
            const hasUpper = /[A-Z]/.test(value);
            const hasLower = /[a-z]/.test(value);
            const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
            const hasMinLenght= value.length >= 8;
            const passwordValid = hasNumber && hasUpper && hasLower && hasSpecial && hasMinLenght;

            return passwordValid ? null:{passwordStrength:true};
            
        }
    }

    static passwordMatch(controlName:string, matchingControlName:string){
        return (formGroup:AbstractControl):ValidationErrors | null =>{
            const control = formGroup.get(controlName);
            const matchingControl = formGroup.get(matchingControlName);
            if(control?.value !== matchingControl?.value){
                matchingControl?.setErrors({passwordMatch:true});
            }else{
                matchingControl?.setErrors(null);
            }
            return null;
        }

    }
    }