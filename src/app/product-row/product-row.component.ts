import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
/**
 * @ProductRow: A component for the view of single Product
 */
export class ProductRowComponent implements OnInit {
@Input() product: Product;
@HostBinding('attr.class') cssClass = 'item';
  constructor() { }

  ngOnInit() {
  }

}
