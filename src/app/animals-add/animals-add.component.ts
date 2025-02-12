import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalsService } from '../services/animals.service';
import { Animal } from '../models/animal.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-animal',
  standalone: true,  // Définir le composant comme standalone
  imports: [
    CommonModule,
    ReactiveFormsModule  // Importer ReactiveFormsModule directement
  ],
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css'],
})
export class AddAnimalComponent {
  animalForm: FormGroup;
  
  constructor(
    private animalsService: AnimalsService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // Créez le formulaire avec des validations
    this.animalForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      race: ['', Validators.required],
      image: [''],
    });
  }

  // Méthode pour soumettre le formulaire
  addAnimal() {
    if (this.animalForm.valid) {
      const animalData: Animal = this.animalForm.value;
      this.animalsService.createAnimal(animalData).subscribe(
        (response) => {
          alert('Animal ajouté avec succès!');
          this.router.navigate(['/animals']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'animal:', error);
          alert('Erreur lors de l\'ajout de l\'animal.');
        }
      );
    } else {
      alert('Veuillez remplir correctement le formulaire');
    }
  }
}
