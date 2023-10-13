import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Product } from './product';
import {HttpClient} from '@angular/common/http'

//Data-transfer-object
interface ProductDTO {
  id:number
  title:string
  price:number
}

@Injectable({
  providedIn: 'root'
})
export class ProductService  {
  private productsUrl = 'https://fakestoreapi.com/products'

  constructor(private http:HttpClient ) { }
  private products =[
      {
        name:'WebCam',
        price: 100
      },
      {
        name:'Mikrofon',
        price: 200
      },
      {
        name:'Klawiatura',
        price: 300
      }
    ]
  private convertToProduct(product:ProductDTO):Product{
    return{
      id:product.id,
      name:product.title,
      price:product.price
    }
  }
  getProducts(): Observable<Product[]>{
    // return of (this.products)
    return this.http.get<ProductDTO[]>(this.productsUrl).pipe(
      map(products =>products.map(
        product => {
        //   return{ 
        //     id:product.id,
        //     name:product.title,
        //     price: product.price}
        // }
        return this.convertToProduct(product)}
      ))
    )
  }
  getProduct(id:number):Observable<Product>{
    return this.http.get<ProductDTO>(`${this.productsUrl}/${id}`).pipe(map(product => this.convertToProduct(product)))
  }
  addProduct(name:string, price:number):Observable<Product>{
   return this.http.post<ProductDTO>(this.productsUrl, {
    title:name,
    price:price
   }).pipe(map(product => this.convertToProduct(product)))

  }
  updateProduct(id:number, price:number):Observable<void>{
    return this.http.patch<void>(`${this.productsUrl}/${id}`, {
    // title:name,
    // price:price
      price
  })
}
deleteProduct(id:number):Observable<void>{
  return this.http.delete<void>(`${this.productsUrl}/${id}`)
}
}
