import { Component } from '@angular/core';
import { CurrencyService } from './service/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cryptocurrency';
  selectedCurrency:string='INR';
  constructor(private currencySer:CurrencyService){

  }
  sendCurrency(any:any){
console.log(any)
this.currencySer.setCurrency(any)
  }
}
