import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonList, IonItem, CommonModule, FormsModule]
})
export class TablaPage {
  numero: number = 0;
  tabla: number[] = [];

  generarTabla() {
    if (!this.numero) return;
    this.tabla = Array.from({ length: 13 }, (_, i) => this.numero * (i + 1));
  }
}