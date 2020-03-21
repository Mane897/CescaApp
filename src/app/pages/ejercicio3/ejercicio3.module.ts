import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio3PageRoutingModule } from './ejercicio3-routing.module';

import { Ejercicio3Page } from './ejercicio3.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio3PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Ejercicio3Page]
})
export class Ejercicio3PageModule {}
