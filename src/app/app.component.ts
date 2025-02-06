
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonMenuButton, IonToolbar, IonHeader, IonTitle, IonButtons, IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, calculator, language, grid, videocam, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, IonTitle, IonToolbar, IonHeader,IonButtons, IonMenuButton, RouterLinkActive, IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Sumadora', url: '/sumadora', icon: 'calculator' },
    { title: 'Traductor de Números', url: '/traductor', icon: 'language' },
    { title: 'Tabla de Multiplicar', url: '/tabla', icon: 'grid' },
    { title: 'Experiencia Personal', url: '/experiencia', icon: 'videocam' }
  ];

  constructor() {
    addIcons({ home, calculator, language, grid, videocam, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
