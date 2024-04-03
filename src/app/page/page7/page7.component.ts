import { Component ,OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { Producto } from '../../domain/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrl: './page7.component.scss'
})
export class Page7Component {

  producto: Producto = new Producto();

  constructor(private productoService: ProductoService,


    private router: Router ) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.producto = new Producto()
        this.producto = params['producto']
      }
    }
    

  enviar() {
    this.productoService.save(this.producto)
    this.producto = new Producto()
  }

  actualizar() {
    this.productoService.update(this.producto.uid,this.producto);
    this.router.navigate(["page/page8"])
  }
}