import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

   {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
   },

   {
    path: 'currency',
    loadChildren: () => import('./currency/currency.module').then(m => m.CurrencyModule),

   },

   {
    path: '',
    redirectTo: 'login',
    pathMatch:'full'
   }

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }