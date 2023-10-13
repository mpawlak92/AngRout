import { Injectable, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Observable, of, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductViewService implements OnInit{
   product:Product | undefined
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    
  }
  getProduct(id:number):Observable<Product> | undefined{
    // const products = this.productService.getProducts()
    // if(!this.product){
    //   this.product = products[id]
    // }
    // return this.product
    return this.productService.getProducts().pipe(switchMap(products => {
      if(!this.product){
        this.product = products[id]
      }
      return of (this.product)
    }))
  }
}
