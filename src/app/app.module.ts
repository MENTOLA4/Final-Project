import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { share } from 'rxjs';
import { SharedModule } from './shared/shared.module';
import { CurrencyInterceptor } from './features/currency/currency/currency.interceptor';

@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: CurrencyInterceptor,
        multi: true 
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

