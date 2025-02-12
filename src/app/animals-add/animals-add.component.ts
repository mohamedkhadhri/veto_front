import { Component } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { Animal } from '../models/animal.model';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';  // Reactive Forms imports
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule here
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule here

@Component({
  selector: 'app-animals-add',
  templateUrl: './animals-add.component.html',
  styleUrls: ['./animals-add.component.css'],
  standalone: true,  // <-- Mark this component as standalone
  imports: [ReactiveFormsModule, HttpClientModule]  // Import necessary modules directly
})
export class AnimalsAddComponent {
  animalForm: FormGroup;  // FormGroup for managing the form

  constructor(
    private animalService: AnimalsService,
    private fb: FormBuilder  // Injecting FormBuilder for reactive forms
  ) {
    // Initialize the form with validations
    this.animalForm = this.fb.group({
      name: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(0)]],
      race: ['', Validators.required],
      gender: ['', Validators.required],
      weight: [0, [Validators.required, Validators.min(0)]],
      image: [''],
      owner: ['', Validators.required],
    });
  }

  // Method to create a new animal
  createAnimal() {
    if (this.animalForm.invalid) {
      return;  // If form is invalid, prevent submission
    }

    // Create a new animal by passing form data
    this.animalService.registerAnimal(this.animalForm.value).subscribe(
      (response) => {
        alert('Animal created successfully!');
        this.animalForm.reset();  // Reset form after success
      },
      (error: HttpErrorResponse) => {  // Handle errors
        console.error('Error creating animal:', error.message);
        alert(`Error: ${error.message}`);  // Display a message to the user
      }
    );
  }
}
