import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, CommonModule, FormsModule]
})
export class SumadoraPage {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  sumar() {
    this.resultado = this.num1 + this.num2;
  }
}