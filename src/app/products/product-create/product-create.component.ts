import { Component,Output,EventEmitter } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  @Output () added = new EventEmitter<Product>();
  constructor(private productService:ProductService){

  }
  createProduct(name:string, price:number){
    this.productService.addProduct(name,price).subscribe(product => {
      this.added.emit(product)
    })
  }

}
