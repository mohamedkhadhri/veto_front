import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';  // Use provideRouter
import { AppRoutingModule } from './app/app-routing.module';  // Import routing module

// Import the routes directly from AppRoutingModule
import { routes } from './app/app-routing.module';  // Assuming routes are exported

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // Provide the routes array directly
  ]
})
.catch(err => console.error(err));
