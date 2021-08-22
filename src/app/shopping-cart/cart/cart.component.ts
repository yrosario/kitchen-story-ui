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
  
  private cartId:number = 1;

  cartItems:any[] = [
     {id: this.cartId++, productId: 2, name:'tomatoes', qty: 4, price: 2.99, description:"red plum tomatoes", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"},
     {id: this.cartId++, productId: 3, name:'apples', qty: 2, price: 5.00, description:"green apples", imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/granny-smith-apple-background-royalty-free-image-478157670-1564142886.jpg?crop=0.668xw:1.00xh;0.313xw,0.00254xh&resize=980:*"},
     {id: this.cartId++, productId: 2, name:'grapes', qty: 1, price: 3.26, description:"purple grapes", imageUrl: "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Concord-Grape-450w_650x.jpg?v=1612444200"},
     {id: this.cartId++, productId: 7, name:'can of beans', qty: 1, price: 1.69, description:"can of bake beans", imageUrl: "https://cdn11.bigcommerce.com/s-kbm52d/images/stencil/1280x1280/products/5429/5692/Branston_Beans__36271.1594321548.jpg?c=2"}
  ];

  private total:number = 0;
  private lastItemId = 0;

  constructor(private msg: MessengerService) { }

  

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product:any )=> {
      
      this.addToCart(product);
      
      this.getTotal();

    });
  }


  public getTotal():number{
    this.total=0;
    this.cartItems.forEach(item=> {
      this.total += (item.qty * item.price);

    });
    return this.total;
  }

  public addToCart(product:Product){
    this.cartItems.push({id:this.lastItemId++, name:product.getName(), 
        productId:product.getId(), qty:1, price:product.getPrice()});
  }

  public setQty(item:any, event:Event){
    console.log((<HTMLInputElement>event.target).value);
    for(let i = 0; i < this.cartItems.length; i++){
      
    
      if(item.id === this.cartItems[i].id){
        this.cartItems[i].qty = (<HTMLInputElement>event.target).value;
        console.log(item.qty);
        break;
      }
    }
  }

  public remove(id:number){
    
    for(let i = 0; i < this.cartItems.length; i++){
      if(this.cartItems[i].id === id){
        this.cartItems.splice(i, 1);
        console.log(this.cartItems[i]);
        break;
      }
    }
  }

}
