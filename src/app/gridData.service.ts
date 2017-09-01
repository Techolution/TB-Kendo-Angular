import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Product } from './products';

@Injectable()
export class GridDataService {
    readonly PRODUCTS_API = '/assets/data/products.json';

    constructor(private http: Http) {}
    
    getProducts(): Observable<Product[]> {
       return this.http.get(this.PRODUCTS_API)
                       .map(response => response.json().data as Product[]);
    }

}