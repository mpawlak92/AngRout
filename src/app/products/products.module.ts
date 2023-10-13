import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductHostDirective } from './product-host.directive';
// import { FavoritesComponent } from './favorites/favorites.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsRoutingModule } from './products-routing.module';
// import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductHostDirective,  ProductViewComponent, ProductCreateComponent],
  imports: [CommonModule, ProductComponent,ProductsRoutingModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
