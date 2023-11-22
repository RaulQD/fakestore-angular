import { AbstractControl,  ValidationErrors, ValidatorFn } from "@angular/forms";

export const stringPattern: string = "^(?:[A-ZÁÉÍÓÚÜÑ]'?|[A-ZÁÉÍÓÚÜÑ])(?:[aA-zZáéíóúüñÁÉÍÓÚÜÑ](?!.*[A-ZÁÉÍÓÚÜÑ]{2})(?:'?[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)*(?: [A-Za-záéíóúüñÁÉÍÓÚÜÑ]+(?:'?[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)*)*)+$";
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
export const dniPattern: string = "^[0-9]{8,8}$";
export const telefonoPattern: string = "^9[\\d]{8}$";

export const cardNumber: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const validCard = value.replace(/\s/g, ' ').replace(/\D/g, ' ').replace(/([0-9]{4})/g, '$1 ').trim();
    if (validCard.length === 19) {
        return { cardNumber: true };
    }
    return null;
}