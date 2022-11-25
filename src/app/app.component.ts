import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre  : string   = 'Capitan America';
  nombre2 : string   = 'CaPitaN aMeriCA';
  array   : number[] = [1,2,3,4,5,6,7,8,9,10];
  PI      : number   = Math.PI;
  percent : number   = 0.54498;
  salario : number   = 1568.9;
  date    : Date     = new Date();

  idioma : string = 'es';

 valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego el Salario!!!')
    }, 4500);
  })

  heroe = {
    nombre   : 'Logan',
    clave    : 'Wolverine',
    edad     :  100,
    direcion :  {
    calle    : 'Primera',
    numero   : '13'
    }
  }
}
