import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importer RouterModule pour utiliser routerLink
import { MatSidenavModule } from '@angular/material/sidenav'; // Importer le module MatSidenavModule
import { MatListModule } from '@angular/material/list'; // Importer MatListModule pour les listes
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importer les animations

@Component({
  selector: 'app-sidebar',
  standalone: true, // Déclarer ce composant comme standalone
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [
    RouterModule, // Assurez-vous d'importer RouterModule ici pour que les liens fonctionnent
    MatSidenavModule, // Ajouter le module MatSidenavModule pour utiliser mat-sidenav
    MatListModule, // Ajouter le module MatListModule pour utiliser mat-nav-list
    BrowserAnimationsModule // Importer BrowserAnimationsModule pour activer les animations
  ]
})
export class SidebarComponent {}
