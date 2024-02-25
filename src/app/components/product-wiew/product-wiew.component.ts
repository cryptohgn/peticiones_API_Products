import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.type=interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-wiew',
  templateUrl: './product-wiew.component.html',
  styleUrls: ['./product-wiew.component.css']
})
export class ProductWiewComponent {
  myProduct!: Product;

  activatedRoute = inject(ActivatedRoute)
  serviceProduct = inject(ProductsService)

  ngOnInit(){
    this.activatedRoute.params.subscribe(async (params: any)=>{
      let id = params.id;
       let response = await this.serviceProduct.getById(id)
      this.myProduct = response;
    })
  }

}
