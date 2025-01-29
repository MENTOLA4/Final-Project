import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency/currency.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CurrencyInterceptor } from './currency/currency.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyRoutingModule } from './currency-routing.module';




@NgModule({
  declarations: [
    CurrencyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CurrencyRoutingModule
  ]
})
export class CurrencyModule { }
