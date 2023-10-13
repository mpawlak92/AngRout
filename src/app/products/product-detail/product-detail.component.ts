import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit,OnChanges{
  // @Input() product: Product | undefined;
  @Input() id = -1;
  @Output() deleted = new EventEmitter();
  @Output() bought = new EventEmitter();
  product$: Observable<Product> | undefined

  @ViewChild(ProductDetailComponent) productDetail:ProductDetailComponent | undefined

    constructor(private productService: ProductService){
      
    }

    ngOnInit(): void {
      // console.log(`Name to ${this.name} w onInit hook`)
    }
    ngOnChanges(): void {
      this.product$ = this.productService.getProduct(this.id)
      // const products = changes['product']
    }
   

  buy(){
    this.bought.emit();    
  }
  get productName():string{
    
    return this.productName
  }
  changePrice(product:Product,price:number){
    this.productService.updateProduct(product.id, price).subscribe(()=>{
      alert(`Cena produktu ${product.name} została zmieniona`)
    })
  }
  remove(product:Product){
    this.productService.deleteProduct(product.id).subscribe(()=>{
      this.deleted.emit()
    })
  }
}
