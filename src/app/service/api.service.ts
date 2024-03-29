import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCurrencyData(currency: any) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }
  getTrendingCurrency() {
    return this.http.get<any>(`../../assets/api.json`)
  }
  getGraphicalCurrencyData(coinId: any, currency: any, days: any) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`)
  }
  getCurrencyById(coinId: any) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`)
  }
}
