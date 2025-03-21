import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatLabel} from '@angular/material/form-field';
import {NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-product',
  imports: [
    MatLabel,
    NgIf,
    MatButton
  ],
  templateUrl: './product.component.html',
  standalone: true,
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product: any
  @Output() onclose=new EventEmitter()

  open_product() {
    open(this.product.link)
  }

  close_product() {
    this.onclose.emit(false)
  }
}
