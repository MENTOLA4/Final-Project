import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './currency.component.html',
  standalone:false,
  styleUrl: './currency.component.scss'
})
export class CurrencyComponent implements OnInit {
  title = 'converter';
  currencies: any[] = [];

  form: FormGroup = new FormGroup({
    first: new FormControl(0),
    second: new FormControl(0),
    firstCurr: new FormControl(''),
    secondCurr: new FormControl('')
  })

  constructor(private currencyService: CurrencyService) {
    this.currencyService.getCurrencies().subscribe(val => {
      this.currencies = val;
    });
  }

  ngOnInit(): void {
      this.form.controls['first'].valueChanges.pipe(
        debounceTime(3000)
      ).subscribe(val => {
        this.getExchangeRate(this.form.value.firstCurr, this.form.value.secondCurr, true);
      })

      this.form.controls['second'].valueChanges.pipe(
        debounceTime(3000)
      ).subscribe(val => {
        this.getExchangeRate(this.form.value.secondCurr, this.form.value.firstCurr, false);
      })
  }

  getExchangeRate(base: string, target: string, isFirst: boolean) {
    this.currencyService.getExchangeRate(base, target).subscribe(val => {
      
        if(isFirst) {
          this.form.controls['second'].setValue(this.form.value.first * val, {emitEvent: false});
        } else {
          this.form.controls['first'].setValue(this.form.value.second * val, {emitEvent: false});
        }
    });
  }
}