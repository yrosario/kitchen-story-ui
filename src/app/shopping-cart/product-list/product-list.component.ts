import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entity/product.entity';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList:Product[] = [];

  constructor(private productService:ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.searchTerm)
        this.productList = this.productService.getProductList().filter(product => 
        product.getName().toLowerCase().includes(params.searchTerm.toLowerCase()));
      else
        this.productList = this.productService.getProductList();
      });
    
  }

}
