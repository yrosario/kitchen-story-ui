import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../entity/product.entity';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private productList:Product[] = [];
  constructor(private productService:ProductService, private router:Router){}

  ngOnInit(): void {
    this.productList = this.productService.getProductList();
  }

  public getProductList():Product[]{
    return this.productList;
  }

  redirectToPage():void{
    this.router.navigate(['/product-form']);
  }

  redirectToPageWithId(id:number):void{

    this.router.navigate(['/product-form', { queryParams: { id: id } }]);
  }

  removeProduct(id:number){
    this.productService.removeProduct(id);
  }



}
