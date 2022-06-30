export class Item {
    name: string;
    size: string;
    quantity: number;
    price: number;
    image: string;

    constructor(name: string, size: string, quantity: number, price: number, image: string) {
        this.name = name;
        this.size = size;
        this.quantity = quantity;
        this.price = price;
        this.image = image;
    }
}
