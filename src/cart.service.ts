import{Injectable}from'@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];
  constructor() { }

  addToCart (product: Product){
    Product.push(product);
  }
}
