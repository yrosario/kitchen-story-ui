import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/entity/product.entity';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  private productList:Product[] = [];
  private invalidForm:boolean = false;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProductList();
  }


  onSubmit(form:NgForm){
    this.addProduct(form);

  }

  contain(name:string):boolean{
    this.productList.forEach(product =>{
      console.log(product.getName().localeCompare(name));
      if(product.getName().localeCompare(name) != 0)
         return true;
    });

    return false;
  }

  addProduct(form:NgForm){
    if(!this.contain(form.value.name))
      this.productService.setProduct(form.value.name, form.value.price, form.value.description, form.value.imageUrl);

  
  }

}
