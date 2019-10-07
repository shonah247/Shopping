import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[];
  @Output() onProductSelected: EventEmitter<Product>
  private currentProduct: Product


   constructor(private cartService: CartService){
    this.products = [
      new Product('IPhone 10xs',799,'A large Ass phone, basically the same shit as the other Iphones we got but Dont be left out the loop lil Dude'),
      new Product ('IPad Air Lite',699,'A giant Iphone but this time with an even larger screen'),
      new Product('IPhone 5s',299,'An IPhone for the newer babies since 2000 babies get phones for gifts now'),
      new Product('Apple Computer',1000,'A very expensive TOP MUFkn NOTCH laptop for the hardworkers, Anime Watchers, and Procrastinators.'),
      new Product('Earphones',25,'These bad boys your going to have to buy atleast twice a month cause Apple IPhones can only have Apple earphones. ACT NOW FOR $5 OFF!')]

    this.onProductSelected = new EventEmitter();
  }

  share() {
    window.alert('You just shared Something WoW!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
