import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product.type=interface';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

type ApiResponse = {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  results: Product[]
}

@Injectable({
  providedIn: 'root'
})



export class ProductsService {

  private BaseUrl: string = 'https://peticiones.online/api/products/';

  httpClient = inject(HttpClient)

  getAll(): Promise<ApiResponse>{
    return firstValueFrom (
    this.httpClient.get<ApiResponse>(this.BaseUrl)
  )}

  getByPage(page: number): Promise<ApiResponse>{
    return firstValueFrom(
      this.httpClient.get<ApiResponse>(`${this.BaseUrl}${page}`))
  }

  getById(id: string): Promise<Product | any>{
    return firstValueFrom(
      this.httpClient.get<Product | any>(`${this.BaseUrl}${id}`)   )
  }

  // getCategory(categorie: string){

  // }
}
