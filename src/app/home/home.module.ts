import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StocksComponent } from './stocks/stocks.component';
import { MatCardModule } from '@angular/material/card';
import { NgxDatatableModule} from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    HomeComponent,
    StocksComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    NgxDatatableModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
