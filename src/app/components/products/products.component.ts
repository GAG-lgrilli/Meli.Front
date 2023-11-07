import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/entities/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private router: Router) {
    // Crear productos y agregarlos a la matriz
    const producto1 = new Product();
    producto1.id = 1;
    producto1.descripcion = 'Remera 1';
    producto1.price = 10000;
    producto1.quantity = 1;

    const producto2 = new Product();
    producto2.id = 2;
    producto2.descripcion = 'Remera 2';
    producto2.price = 12000;
    producto2.quantity = 2;

    // Agregar productos a la matriz
    this.products.push(producto1, producto2);
  }

  ngOnInit() {
    // Puedes acceder al objeto producto en este punto.

  }

  detalle(){
    this.router.navigate(['product/:id']);
  }

}
