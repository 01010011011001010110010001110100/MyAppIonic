import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumerosService } from '../../services/numeros.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, CommonModule, FormsModule],
  providers: [NumerosService]
})
export class TraductorPage {
  numero: number = 0;
  resultado: string = '';

  constructor(private numerosService: NumerosService) {}

  traducir() {
    this.resultado = this.numerosService.convertir(this.numero);
  }
}