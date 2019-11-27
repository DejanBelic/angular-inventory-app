import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  /**
   * @Input productList - the Product[] passed to us.
   */
    @Input() productList: Product[];
    /**
     * @output onProductSelected - outputs current
     * Product whenever a new product is selected.
     */
    @Output() onProductSelected: EventEmitter<Product>;

  /**
   * @property currentProject - local state containing
   * the currently selected project.
   */
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

}
