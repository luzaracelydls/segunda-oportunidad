import { Component, OnInit } from '@angular/core';
import { ConsultaBDService } from '../consulta-bd.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  productos: any[] = [];
  categorias: string[] = ['men\'s clothing', 'jewelery', 'electronics', 'women\'s clothing'];
  categoriaSeleccionada: string = '';

  constructor(private consultaBDService: ConsultaBDService) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.consultaBDService.getProductos().subscribe((response: any) => {
      this.productos = response.map((producto: any) => ({
        ...producto,
        expandido: false
      }));
    });
  }

  expandirProducto(producto: any) {
    producto.expandido = !producto.expandido;
  }

  filtrarPorCategoria(event: any) {
    const categoriaSeleccionada = event.detail.value;
    if (categoriaSeleccionada) {
      this.consultaBDService.getProductoPorCategoria(categoriaSeleccionada).subscribe((response: any) => {
        this.productos = response.map((producto: any) => ({
          ...producto,
          expandido: false
        }));
      });
    } else {
      this.obtenerProductos();
    }
  }
  
}