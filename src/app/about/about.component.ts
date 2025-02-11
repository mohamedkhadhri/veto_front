import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="about-container">
      <mat-card class="hero">
        <mat-card-title>Welcome to VetCare Platform</mat-card-title>
        <mat-card-subtitle>Your Trusted Veterinary Companion</mat-card-subtitle>
        <mat-card-content>
          <p>VetCare is a modern online platform providing top-tier veterinary services for pet owners, veterinary professionals, and clinics.</p>
          <button mat-raised-button color="accent">Get Started</button>
        </mat-card-content>
      </mat-card>

      <div class="features">
        <mat-card class="feature-card" *ngFor="let feature of features">
          <mat-icon class="feature-icon">{{ feature.icon }}</mat-icon>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </mat-card>
      </div>

      <div class="team">
        <h2>Meet Our Experts</h2>
        <div class="team-members">
          <mat-card class="member" *ngFor="let member of team">
            <img [src]="member.photo" alt="{{ member.name }}">
            <h3>{{ member.name }}</h3>
            <p>{{ member.role }}</p>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container { text-align: center; padding: 40px; background: linear-gradient(135deg, #f6d365 0%, #fda085 100%); color: #fff; }
    .hero { padding: 40px; margin-bottom: 50px; background: rgba(255, 255, 255, 0.2); border-radius: 10px; }
    .features { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 20px; }
    .feature-card { width: 30%; padding: 20px; text-align: center; background: rgba(255, 255, 255, 0.3); border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .feature-icon { font-size: 40px; color: #ffeb3b; }
    .team { margin-top: 60px; text-align: center; }
    .team-members { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 30px; }
    .member { width: 220px; text-align: center; background: rgba(255, 255, 255, 0.2); padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); display: flex; flex-direction: column; align-items: center; }
    img { width: 120px; height: 120px; border-radius: 50%; border: 3px solid #ffeb3b; display: block; margin: 0 auto; }
    h2 { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); }
  `]
})
export class AboutComponent {
  features = [
    { icon: 'pets', title: 'Pet Health Records', description: 'Easily manage your pet’s medical history and appointments.' },
    { icon: 'local_hospital', title: 'Online Consultations', description: 'Consult with expert veterinarians anytime, anywhere.' },
    { icon: 'storefront', title: 'Vet Marketplace', description: 'Access top-quality pet products and services.' }
  ];

  team = [
    { name: 'Abidi Wael', role: 'Developer', photo: 'assets/images/wael_pic.jpg' },
    { name: 'Khedhri Mohamed', role: 'Doctor', photo: 'assets/images/wael_pic.jpg' },
    { name: 'Khamessi Nader', role: 'Admin', photo: 'assets/images/wael_pic.jpg' }
  ];
}