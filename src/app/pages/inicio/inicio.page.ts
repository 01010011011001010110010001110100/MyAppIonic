import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonAvatar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonLabel, IonCardContent, IonCardHeader, IonCard, IonCardTitle, IonItem, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}