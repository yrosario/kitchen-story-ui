import { Injectable } from "@angular/core";
import { Product } from "../entity/product.entity";

export class ProductService{
    private productId:number = 1;
    private productList:Product[] = [
        new Product(this.productId++, "Tomatoes", 2.99, "red plum tomatoes", "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg"),
        new Product(this.productId++, "apples", 5.00, "green apples", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/granny-smith-apple-background-royalty-free-image-478157670-1564142886.jpg?crop=0.668xw:1.00xh;0.313xw,0.00254xh&resize=980:*"),
        new Product(this.productId++, "grapes", 3.26, "purple grapes", "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Concord-Grape-450w_650x.jpg?v=1612444200"),
        new Product(this.productId++, "can of beans", 1.69, "can of bake beans", "https://cdn11.bigcommerce.com/s-kbm52d/images/stencil/1280x1280/products/5429/5692/Branston_Beans__36271.1594321548.jpg?c=2"),
        new Product(this.productId++, "cherios", 4.50, "cheerios box", "https://images.albertsons-media.com/is/image/ABS/111011146?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available"),
        new Product(this.productId++, "coke", 1.50, "Coke can", "https://i.etsystatic.com/8015299/r/il/3f4760/1556266094/il_794xN.1556266094_koio.jpg"),
        new Product(this.productId++, "straberries", 4.99, "red straberries", "https://s.hdnux.com/photos/01/17/32/35/20817729/3/ratio3x2_1200.jpg"),
        new Product(this.productId++,  "Hass Avacodos", 1.50, "hass avacados", "https://images.albertsons-media.com/is/image/ABS/184700157?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available"),
        new Product(this.productId++, "rice", 12.99, "Jasmine rice", "https://www.recipetineats.com/wp-content/uploads/2020/03/Basmati-rice.jpg?resize=650,520"),
        
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