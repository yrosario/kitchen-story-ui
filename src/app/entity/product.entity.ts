export class Product{
    private id: number;
    private name:string;
    private price:number;
    private description:string;
    private imageUrl:string;

    constructor(id:number, name:string ="", price:number = 0, description:string, imageUrl:string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    public getId():number{
        return this.id;
    }

    public setId(id:number){
        this.id = id;
    }

    public getName():string{
        return this.name;
    }

    public setName(name:string){
        this.name = name;
    }

    public getPrice():number{
        return this.price;
    }

    public setPrice(price:number){
        this.price = price;
    }

    public getDescription():string{
        return this.description;
    }

    public setDescription(description:string){
        this.description = description;
    }

    public getImageUrl():string{
        return this.imageUrl;
    }
    
    public setImageUrl(imageUrl:string){
        this.imageUrl = imageUrl;
    }
    

}