import { Injectable } from '@angular/core';
import {  Month, Year } from 'src/app/interface/expiration.enum';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  
  private _mes: Month[] = [Month.Enero, Month.Febrero, Month.Marzo, Month.Abril, Month.Mayo, Month.Junio, Month.Julio, Month.Agosto, Month.Septiembre, Month.Octubre, Month.Noviembre, Month.Diciembre];
  
  private _year  = new Date().getFullYear();

  get month(): Month[] {
    return [...this._mes];
  }
  getYears(): number[]{
    const years: number[] = [];
    const currentYear: number = new Date().getFullYear();
    const endYear: number = currentYear + 10; 

    for (let year = currentYear; year <= endYear; year++){
      years.push(year);
    }
    return years;
  }

}
