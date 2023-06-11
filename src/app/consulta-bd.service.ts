import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ConsultaBDService {
  
  constructor(
    private http: HttpClient
    ) { }
    
    getProductos(){ 
      return this.http.get('https://fakestoreapi.com/products')
    }
    getCategorias(){ 
      return this.http.get('https://fakestoreapi.com/products/categories')
    }
    getProducto(id: number) { 
      return this.http.get('https://fakestoreapi.com/products/' + id.toString())
    }
    getProductoPorCategoria(categoria: string){ 
      return this.http.get('https://fakestoreapi.com/products/category/'+ categoria)
    }
    deleteProducto(id: number){
      return this.http.delete('https://fakestoreapi.com/products/' + id.toString());
    }
    
    
  }
  