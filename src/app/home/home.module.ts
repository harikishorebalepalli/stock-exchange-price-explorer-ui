import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StocksComponent } from './stocks/stocks.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxDatatableModule} from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { StockService } from '../services/stock.service';



@NgModule({
  declarations: [
    HomeComponent,
    StocksComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    NgxDatatableModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTooltipModule,
    NgxSpinnerModule,
    HomeRoutingModule
  ],
  providers:[
    MatDatepickerModule,
    MatNativeDateModule,
    StockService,
    NgxSpinnerModule,
    DatePipe
  ]
})
export class HomeModule { }
