import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private selectedCurrency$: BehaviorSubject<any> = new BehaviorSubject<any>("INR")
  constructor() { }

  getCurrency() {
    return this.selectedCurrency$.asObservable();
  }
  setCurrency(currency: any) {
    this.selectedCurrency$.next(currency)
  }
}
