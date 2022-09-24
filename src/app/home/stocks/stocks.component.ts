import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { StockService } from 'src/app/services/stock.service';
import { catchError, of, Subject, takeUntil } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private datePipe : DatePipe,
              private stockService: StockService,
              private spinner: NgxSpinnerService,
              private toastr: ToastrService) { 
  }

  data : any;
  private readonly destroy$ = new Subject<void>();
  columns = [
    { prop: 'id', name: 'id' },
    { prop: 'name', name: 'Stock Name' },
    { prop: 'openPrice', name: 'Open Price' },
    { prop: 'closePrice', name: 'Closing Price' },
    { prop: 'date', name: 'Date' },
  ];
  requestFormGroup=  this.formBuilder.group({
    symbol: new FormControl(null),
    startDate: new FormControl(null),
    endDate: new FormControl(null),

}); ;

  ngOnInit(): void {
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
}

  fetchStockData(){
    this.spinner.show('stockSpinner');
    let startDate = this.datePipe.transform(this.requestFormGroup.value.startDate,'YYYY-MM-dd'); 
    let endDate =  this.datePipe.transform(this.requestFormGroup.value.endDate,'YYYY-MM-dd');
    this.stockService.fetchStocks(this.requestFormGroup.value.symbol,startDate,endDate)
                      .pipe(takeUntil(this.destroy$),catchError(this.handleError))
                      .subscribe((stocks)=>{
                          this.data = stocks;
                          this.spinner.hide('stockSpinner');
                      })
  }

  handleError = (resp: any) => {
    switch (resp.error?.statusCode) {
        case 404:
            this.toastr.error('Resource Not Found', 'Error!');
            this.spinner.hide('stockSpinner');
            break;
        default:
            this.toastr.error('Unknown error occured', 'Error!');
            this.spinner.hide('stockSpinner');
    }
    return of([]);
};




}
