import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  URL: string = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_Xrp9OkHiLxvTvAy3qGbxyPKNJ7nr3ZWMIOy3EE4Z&currencies=EUR%2CUSD%2CCAD'
  currencies: any[] = [];


  constructor(private http: HttpClient) { }


  getCurrencies() {
    const url = this.URL + 'currencies';
    if (this.currencies.length > 0) {
      return of(this.currencies);
    }
    return this.http.get<{data: any}>(url).pipe(
      map(val => {
        return Object.keys(val.data).map(key => val.data[key]);
      }),
      tap(
        val => {
          this.currencies = val; 
        }
      )
    );
  }

  getExchangeRate(baseCurr: string, targetCurr: string) {
    const url = this.URL + 'latest' + '?base_currency='+baseCurr+'&currencies='+targetCurr;

    return this.http.get<{data: any}>(url).pipe(
      map(val => Object.keys(val.data).map(key => val.data[key])[0])
    );
  }
}
