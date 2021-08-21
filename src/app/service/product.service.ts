import { Injectable } from "@angular/core";
import { Product } from "../entity/product.entity";

export class ProductService{
    private productList:Product[] = [
        new Product(1, "Tomatoes", 5.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(2, "Tomatoes", 3.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(3, "Tomatoes", 4.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(4, "Tomatoes", 7.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(5, "Tomatoes", 8.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(6, "Tomatoes", 3.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(7, "Tomatoes", 4.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(8, "Tomatoes", 5.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(9, "Tomatoes", 4.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(10, "Apple", 4.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
     ];

     public getProductList():Product[]{
        return this.productList;
     }

     public getProduct(id:number):number{
        //todo 
        return -1;
     }

     public setProduct(id:number, name:string, price:number, description:string, imageUrl:string){
         this.productList.push(new Product(id, name, price, description, imageUrl));
     }

     public removeProduct(id:number){
         //todo
     }


}