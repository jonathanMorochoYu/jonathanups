import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Producto } from '../../domain/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-page8',
  templateUrl: './page8.component.html',
  styleUrl: './page8.component.scss'
})
export class Page8Component {


  listadoProducto: Producto[] = [];
  listadoProductoFire: any;

  constructor(private productoService: ProductoService, private router: Router) {

    this.listadoProducto=productoService.getList()
    this.listadoProductoFire=productoService.getAll()
  }

  editar(producto: Producto){
    let params: NavigationExtras = {
      queryParams: {
        producto: producto,
        nombre: 'morocho'
      }
    };
    this.router.navigate(['page/page7'], params);
  }

    eliminar(event: Event,producto:Producto){
      this.productoService.delete(producto.uid)
    }
  
  nuevo() {
    this.router.navigate(['page/page7']);
  }
}
