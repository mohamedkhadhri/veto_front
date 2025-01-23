import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import du module de routage

@Component({
  selector: 'app-root',
  standalone: true, // Configure comme standalone
  imports: [RouterModule], // Ajoutez RouterModule pour la navigation
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'veto-frontend';
}
