import { Product } from './../entity/product.entity';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  sendMsg(product:Product){
    this.subject.next(product);
  }

  getMsg(){
    return this.subject.asObservable();
  }
}
