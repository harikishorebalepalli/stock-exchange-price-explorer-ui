import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
  { path: '',   redirectTo: 'stocks', pathMatch: 'full' },
  { path: 'stocks', component: StocksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
