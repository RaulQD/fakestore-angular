import { Component } from '@angular/core';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent {

  redirectToSocialMedia(socialMedia: string): void {
    /* crea una variable constante que denomina el tipo [clave: cadena] */
    const socialMediaURL: { [key: string]: string } = {
      'LinkedIn': 'https://www.linkedin.com/in/raulqd/',
      'GitHub': 'https://github.com/RaulQD',
      'WhatsApp': 'https://wa.pe/dnvY2iQiHq',

    }
    //HASOWNPROPERTY: devuelve un valor booleano que indica si el objeto tiene la propiedad especificada como propiedad directa del objecto en cuestion.
    if (socialMediaURL.hasOwnProperty(socialMedia)) {
      window.open(socialMediaURL[socialMedia], '_blank');
      console.log(`Redireccionando a ${socialMedia}`)
    } else {
      console.error(`No existe la red social ${socialMedia}`);
    }
  }
}
