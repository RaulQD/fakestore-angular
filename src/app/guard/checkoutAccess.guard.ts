import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { StoreService } from '../service/store.service';

export const checkoutAccessGuard: CanActivateFn = (route, state) => {

  //Verificar si mi carrito de compras tiene productos
  const storeService = inject(StoreService);
  const router = inject(Router);
  const total = storeService.getTotal();
  //verificar con operador ternario
  total > 0 ? true : router.navigate(['/fakestore/products']), console.log('No hay productos en el carrito');
  ;
  // if (total > 0) {
  //   return true;
  // } else {
  //   router.navigate(['/fakestore/products']);
  //   console.log('No hay productos en el carrito')
  //   return false;
  // }
  return true;
};
