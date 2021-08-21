import { Product } from './../../entity/product.entity';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cartItems:any[] = [
    // {id: 1, productId: 2, name:'test1', qty: 4, price: 100},
    // {id: 1, productId: 3, name:'test2', qty: 2, price: 100},
    // {id: 1, productId: 2, name:'test4', qty: 1, price: 100},
    // {id: 1, productId: 7, name:'test5', qty: 1, price: 100}
  ];

  private total:number = 0;
  private lastItemId = 0;

  constructor(private msg: MessengerService) { }

  

  ngOnInit(): void {

    if(typeof(localStorage.getItem("cart"))!='undefined')
      this.cartItems.push(JSON.parse(sessionStorage.get("cart")));

    console.log(sessionStorage.getItem("cart"));

    this.msg.getMsg().subscribe((product:any )=> {
      
      this.addToCart(product);
      
      this.total=0;
      this.cartItems.forEach(item=> {
        this.total += (item.qty * item.price);

      });

      sessionStorage.setItem('cart', JSON.stringify(this.cartItems));
    });
  }

  noOnChanges(){
    sessionStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  public getTotal():number{
    return this.total;
  }

  public addToCart(product:Product){
    this.cartItems.push({id:this.lastItemId++, name:product.getName(), 
        productId:product.getId(), qty:1, price:product.getPrice()});
  }

}
