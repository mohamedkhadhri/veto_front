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
  padding: 40px;
  border-radius: 15px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h3 {
  text-align: center;
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 2.2em;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.pricing-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Responsive grid with minimum width */
  gap: 30px;
  width: 100%;
  height: auto;
  padding: 10px;
  justify-items: center; /* Center cards within each grid cell */
}

.pricing-card {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  background-color: #fff;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 350px; /* Limit card width */
  width: 100%;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
}

.pricing-card mat-card-header {
  background-color: #fdc392;
  border-bottom: 1px solid #e7a678;
  padding: 20px;
  text-align: center;
}

mat-card-title {
  font-weight: bold;
  font-size: 1.5em;
  color: #3e3e3e;
}

mat-card-content {
  padding: 20px;
  color: #6d6d6d;
  font-size: 1.1em;
  flex-grow: 1;
  line-height: 1.6;
}

.discounted-price {
  background-color: #f7f3a3;
  padding: 12px;
  border-radius: 8px;
  margin-top: 15px;
  color: #c07e00;
  font-weight: bold;
  font-size: 1.2em;
}

.pricing-card p {
  margin: 10px 0;
}

.pricing-card .additional-info {
  background-color: #f3f4f6;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.9em;
  color: #555;
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
