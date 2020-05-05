import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componentes [] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'medkit',
      name: 'Alert',
      redirecTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirecTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y router',
      redirecTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Card',
      redirecTo: '/ejercicio3'
    },
    {
      icon: 'checkbox',
      name: 'Check',
      redirecTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'DateTime',
      redirecTo: '/date-time'
    },
    {
      icon: 'car',
      name: 'Fab',
      redirecTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid',
      redirecTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'Infinite scroll',
      redirecTo: '/infinite-scroll'
    },
    {
      icon: 'hammer',
      name: 'Input - Forms',
      redirecTo: '/input'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componentes {
  icon: string;
  name: string;
  redirecTo: string;
}
