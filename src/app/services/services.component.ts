import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ],
  template: `
    <div class="services-container">
      <h2>Our Veterinary Services</h2>
      <mat-grid-list cols="3" rowHeight="1:1" gutterSize="10px">
        <mat-grid-tile *ngFor="let service of services">
          <mat-card class="service-card">
            <mat-card-header>
              <mat-card-title>{{ service.title }}</mat-card-title>
            </mat-card-header>
            <img mat-card-image [src]="service.image" alt="{{ service.title }}" class="service-image">
            <mat-card-content>
              <p>{{ service.description }}</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button>Learn More</button>
            </mat-card-actions>
          </mat-card>
        </mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
  styles: [`
    .services-container {
      text-align: center;
      padding: 40px;
      background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
      color: #fff;
    }
    h2 {
      margin-bottom: 40px;
      font-size: 2em;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
    .service-card {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    mat-card-header {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 10px 10px 0 0;
    }
    mat-card-title {
      font-size: 1.2em;
      font-weight: bold;
    }
    mat-card-content {
      padding: 10px;
    }
    mat-card-actions {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 0 0 10px 10px;
    }
    button {
      color: #ffeb3b;
    }
    .service-image {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      title: 'General Check-ups',
      description: 'Regular health check-ups to ensure your pet\'s well-being.',
      image: 'assets/images/c.jpg'
    },
    {
      title: 'Emergency Care',
      description: '24/7 emergency services for critical situations.',
      image: 'assets/images/a.jpeg'
    },
    {
      title: 'Surgical Procedures',
      description: 'Advanced surgical services performed by experienced veterinarians.',
      image: 'assets/images/b.jpg'
    },
    {
      title: 'Dental Services',
      description: 'Comprehensive dental care to maintain oral health.',
      image: 'assets/images/d.jpg'
    },
    {
      title: 'Vaccinations',
      description: 'Up-to-date vaccinations to protect your pet from diseases.',
      image: 'assets/images/e.jpg'
    }
  ];
}
 
