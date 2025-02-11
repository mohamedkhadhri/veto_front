import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="pricing-container">
      <h3>Service Pricing</h3>
      <div class="pricing-cards">
        <mat-card class="pricing-card" *ngFor="let element of pricingData">
          <mat-card-header>
            <mat-card-title>{{element.service}}</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p><strong>Price:</strong> {{element.price | currency}}</p>
            <p *ngIf="element.discount"><strong>Discount:</strong> {{element.discount | currency}}</p>
            <p *ngIf="element.description"><strong>Description:</strong> {{element.description}}</p>
            <div *ngIf="element.discountedPrice" class="discounted-price">
              <strong>Discounted Price:</strong> {{element.discountedPrice | currency}}
            </div>
            <p *ngIf="element.additionalInfo"><strong>Additional Info:</strong> {{element.additionalInfo}}</p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .pricing-container {
      margin-top: 40px;
      background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
      padding: 20px;
      border-radius: 10px;
    }
    h3 {
      text-align: center;
      margin-bottom: 20px;
      font-weight: bold;
      font-size: 1.8em;
      color: #fff;
    }
    .pricing-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);  /* 3 items in the first row */
      gap: 20px;
    }
    .pricing-card {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      background-color: #fff;
      overflow: hidden;
      transition: transform 0.3s ease-in-out;
    }
    .pricing-card:hover {
      transform: translateY(-5px);
    }
    .pricing-card mat-card-header {
      background-color: #fdc392;
      border-bottom: 1px solid #e7a678;
    }
    mat-card-title {
      font-weight: bold;
      color: #3e3e3e;
    }
    mat-card-content {
      padding: 15px;
      color: #6d6d6d;
    }
    .discounted-price {
      background-color: #f7f3a3;
      padding: 8px;
      border-radius: 5px;
      margin-top: 10px;
      color: #c07e00;
    }
  `]
})
export class PricingComponent {
  pricingData = [
    { 
      service: 'General Check-ups', 
      price: 50, 
      discount: 10, 
      discountedPrice: 45, 
      description: 'Basic health check to monitor overall health status.',
      additionalInfo: 'Book online and get a free consultation.'
    },
    { 
      service: 'Emergency Care', 
      price: 150, 
      discount: 30, 
      discountedPrice: 120, 
      description: 'Immediate medical treatment for urgent conditions.',
      additionalInfo: 'Available 24/7. Prioritize your health.'
    },
    { 
      service: 'Surgical Procedures', 
      price: 200, 
      discount: 50, 
      discountedPrice: 150, 
      description: 'Major surgeries, including specialized treatments.',
      additionalInfo: 'Includes post-surgery consultation.'
    },
    { 
      service: 'Dental Services', 
      price: 100, 
      discount: 15, 
      discountedPrice: 85, 
      description: 'General dental check-up and hygiene services.',
      additionalInfo: 'Get a free whitening session with any dental cleaning.'
    },
    { 
      service: 'Vaccinations', 
      price: 30, 
      discount: 5, 
      discountedPrice: 25, 
      description: 'Preventive vaccines to boost immunity.',
      additionalInfo: 'Discount on family packages.'
    }
  ];
}
