import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/entity/product.entity';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;
  
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.msg.sendMsg(this.productItem);
  }

}
