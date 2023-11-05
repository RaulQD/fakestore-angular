import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../interface/products.interface';

@Pipe({
  name: 'productsImage'
})
export class ProductsImagePipe implements PipeTransform {

  transform(product: Products): string {
    if (!product.id && !product.images[0]) {
      return 'assets/img/not-image-found.jpg';
    }
    if (product.images[0] && product.images.length > 1) {
      return product.images[0];
    }
    return 'assets/img/not-image-found.jpg'
  }
}
