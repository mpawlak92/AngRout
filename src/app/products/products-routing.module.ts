import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { flush } from "@angular/core/testing";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes:Routes =[
    {
        path:'products',component:ProductListComponent
    },
    {
        path:'products/:id',component:ProductDetailComponent
    },
    {path: '', redirectTo:'products', pathMatch:"full"},
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ProductsRoutingModule{}