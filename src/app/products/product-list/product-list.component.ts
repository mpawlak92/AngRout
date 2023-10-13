import { Component,OnInit, OnDestroy } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Subscription,Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers:[ProductService]
})
export class ProductListComponent implements OnInit,OnDestroy {
  today = new Date()
  selectedProduct:Product | undefined;
  products: Product[] = []
  products$:Observable<Product[]> | undefined
  private productStub:Subscription | undefined

  constructor(private prductService:ProductService){

  }
  
  private getProducts(){
    this.productStub = this.prductService.getProducts().subscribe(products =>{ this.products = products})
    // this.products$ = this.prductService.getProducts();
  
  }
  ngOnInit(): void {
    // this.products= this.prductService.getProducts()
    this.getProducts()
  }
  

  onBuy(){
    window.alert(`Zakupiono ${this.selectedProduct?.name}`)
  }
  ngOnDestroy(): void {
    // this.productStub?.unsubscribe()
  }
  onAdd(product:Product){
    this.products.push(product)
  }
  onDelete(){
    this.products = this.products.filter(product=> product !== this.selectedProduct)
    this.selectedProduct = undefined
  }
}
