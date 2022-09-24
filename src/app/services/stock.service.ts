import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConstants } from '../constants/api.constants';
import { Stock } from '../models/stock.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient: HttpClient) { 
  }

  fetchStocks(stockName: string, startDate: any, endDate: any) : Observable<Stock[]>{
    let url = `${ApiConstants.apiUrl}`;
    if(stockName) url += '?stockName='+stockName;
    if(startDate) url += (stockName ? '&' : '?') + 'startDate='+startDate;
    if(endDate) url += '&endDate='+endDate;
    return this.httpClient.get<Stock[]>(url);
  }
}
