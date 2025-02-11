import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  template: `
    <div class="contact-container">
      <mat-card class="hero">
        <mat-card-title>Contact Us</mat-card-title>
        <mat-card-content>
          <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <mat-form-field>
              <mat-label>Name</mat-label>
              <input matInput [(ngModel)]="contact.name" name="name" required>
            </mat-form-field>
            <mat-form-field>
              <mat-label>Email</mat-label>
              <input matInput [(ngModel)]="contact.email" name="email" required>
            </mat-form-field>
            <mat-form-field>
              <mat-label>Message</mat-label>
              <textarea matInput [(ngModel)]="contact.message" name="message" required></textarea>
            </mat-form-field>
            <button mat-raised-button color="accent" type="submit" [disabled]="!contactForm.form.valid">Submit</button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .contact-container { text-align: center; padding: 40px; background: linear-gradient(135deg, #f6d365 0%, #fda085 100%); color: #fff; }
    .hero { padding: 40px; margin-bottom: 50px; background: rgba(255, 255, 255, 0.2); border-radius: 10px; }
    mat-form-field { width: 100%; margin-bottom: 20px; }
    button { width: 100%; }
  `]
})
export class ContactComponent {
  contact = { name: '', email: '', message: '' };

  onSubmit() {
    console.log('Form submitted!', this.contact);
  }
}
