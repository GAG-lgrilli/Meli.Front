import { Component, Input } from '@angular/core';
import { Product } from 'src/app/entities/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  title : string = "Producto";

  @Input() product: Product = {
    id: 1,
    descripcion: "Remera Oversize",
    categoryId:"1",
    price: 10000,
    quantity: 1,
    providerId: "1",
  };
}
