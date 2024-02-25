import { Component, inject } from '@angular/core';
import { Product } from 'src/app/interfaces/product.type=interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = []; 
  page: number = 1;
  total_pages: number = 0;

  serviceProduct = inject(ProductsService);

  async ngOnInit(){

    try{
    const response = await this.serviceProduct.getAll();

    this.products = response.results;
    this.page = response.page;
    this.total_pages = response.total_pages;

    } catch (error){
      console.log(error) // o redirigir a una pagina de error, o un alert o lo que quisieramos
    }
    // this.serviceProduct.getAll()
    // .then(response => this.products = response.results)
    
  }

    async handleClick(siguiente: boolean){
    
      if(siguiente){
        this.page++;
      } else {
        this.page--;
      }

      const response = await this.serviceProduct.getByPage(this.page)
      this.products = response.results;
    }

}
