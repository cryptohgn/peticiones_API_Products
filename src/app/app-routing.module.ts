import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductWiewComponent } from './components/product-wiew/product-wiew.component';

const routes: Routes = [
  {path: "products", component: ProductListComponent },
  {path: "product/:id", component: ProductWiewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
