import { Injectable } from "@angular/core";
import { Product } from "../entity/product.entity";

export class ProductService{
    private productId:number = 1;
    private productList:Product[] = [
        new Product(this.productId++, "Tomatoes", 5.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(this.productId++, "Tomatoes", 3.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(this.productId++, "Tomatoes", 4.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(this.productId++, "Tomatoes", 7.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(this.productId++, "Tomatoes", 8.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(this.productId++, "Tomatoes", 3.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(this.productId++, "Tomatoes", 4.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(this.productId++, "Tomatoes", 5.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(this.productId++, "Tomatoes", 4.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(this.productId++, "Apple", 4.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
     ];

     public getProductList():Product[]{
        return this.productList;
     }

     public getProduct(id:number):number{
        //todo 
        return -1;
     }

     public setProduct(name:string, price:number, description:string, imageUrl:string){
         this.productList.push(new Product(this.productId++, name, price, description, imageUrl));
         console.log(this.productList)
     }

     public removeProduct(id:number){
         for(var i = 0; i < this.productList.length; i++){
             console.log(i + " " + this.productList[i]);
             if(this.productList[i].getId() === id){
                this.productList.splice(i, 1);
                console.log(this.productList);
                break;
             }
         }

         
     }

     


}