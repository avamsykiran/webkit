class Fruit {

    constructor(title,price){
        this.title=title;
        this.price=price;                                             
    }

    estimateFor(quantity){
        return quantity*this.price;
    }

    discountedEstimateFor(quantity,discPercent){
        let estimate = this.estimateFor(quantity);
        return estimate * discPercent/100;
    }

    static getShopTitle(){
        return "Sri Kanaka Maha Laxmi Fruit Mart";
    }
}

f1 = new Fruit("mango",45);

console.log(f1);
console.log(f1.estimateFor(100));
console.log(f1.discountedEstimateFor(100,25));
console.log(Fruit.getShopTitle());