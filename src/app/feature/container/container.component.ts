import { Component } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
  
})
export class ContainerComponent {

  productList: Product[] = [];


  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  } 

  getProducts() {
    this.productsService.getProducts().subscribe(products => {
      this.productList = products;
    });
  }
}
