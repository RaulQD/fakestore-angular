import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export const stringPattern: string = "^(?:[A-ZÁÉÍÓÚÜÑ]'?|[A-ZÁÉÍÚÜÑ])(?:[aA-zZáéíóúüñÁÉÍÓÚÜÑ](?!.*[A-ZÁÉÍÓÚÜÑ]{2})(?:'?[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)*(?: [A-Za-záéíóúüñÁÉÍÓÚÜÑ]+(?:'?[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)*)*)+$";
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
export const dniPattern: string = "^[0-9]{8,8}$";
export const telefonoPattern: string = "^9[\\d]{8}$";

export class CustomValidators extends Validators {

  //VALIDAR QUE EL NÚMERO MOVIL SEA DE 9 DIGITOS Y EMPIECE CON 9
  static phoneNumbers(control: AbstractControl): ValidationErrors | null {
    return /^9[0-9]{8}$/.test(control.value) ? null : { phoneNumbers: 9 };
  }
  //VALIDAR QUE SE INGRESEN SOLO NUMEROS
  static onlyNumbers(control: AbstractControl): ValidationErrors | null {
    return /^[0-9]*$/.test(control.value) ? null : { onlyNumbers: true };
   }
  //VALIDAR QUE SOLO LETRAS
  static onlyLetters(control: AbstractControl): ValidationErrors | null { 
    return /^(?:[A-ZÁÉÍÓÚÜÑ]'?|[A-ZÁÉÍÚÜÑ])(?:[aA-zZáéíóúüñÁÉÍÓÚÜÑ](?!.*[A-ZÁÉÍÓÚÜÑ]{2})(?:'?[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)*(?: [A-Za-záéíóúüñÁÉÍÓÚÜÑ]+(?:'?[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)*)*)+$/.test(control.value) ? null : { onlyLetters: true };
  }
  //VALIDAR TARJETA DE CREDITO
  static creditCard(control: AbstractControl): ValidationErrors | null {
    return /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/.test(control.value) ? null : { creditCard: 16 };
  }
  //VALIDAR EL CODIGO DE SEGURIDAD DE LA TARJETA DE CREDITO
  static cvv(control: AbstractControl): ValidationErrors | null {
    return /^\d{3}$/.test(control.value) ? null : { cvv: 3 };
  }
}