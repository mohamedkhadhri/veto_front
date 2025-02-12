import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { Animal } from '../models/animal.model';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css'],
  standalone: false  // Si c'est un composant autonome
})
export class AnimalsListComponent implements OnInit {
  animals: Animal[] = [];

  constructor(private animalService: AnimalsService) {}

  ngOnInit(): void {
    this.getAllAnimals();  // Appel de la méthode getAllAnimals
  }

  // Récupérer tous les animaux
  getAllAnimals() {
    this.animalService.getAllAnimals().subscribe(
      (response) => {
        console.log('Animals:', response);
        this.animals = response;  // Mise à jour de la liste des animaux
      },
      (error) => {
        console.error('Error fetching animals:', error);
      }
    );
  }

  // Afficher les détails d'un animal
  onDetailsClick(animal: Animal) {
    alert(`You clicked on ${animal.name}`);  // Affichage des détails dans une alerte pour l'instant
  }

  // Définir l'image par défaut si elle ne se charge pas
  setDefaultImage(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'assets/images/default-pet.png';  // Image par défaut
  }

  // Supprimer un animal
  onDeleteClick(animal: Animal) {
    const confirmation = confirm(`Are you sure you want to delete ${animal.name}?`);
    if (confirmation) {
      this.animalService.deleteAnimal(animal.id).subscribe(
        () => {
          this.animals = this.animals.filter(a => a.id !== animal.id);  // Supprimer l'animal de la liste
          alert(`${animal.name} has been deleted successfully.`);
        },
        (error) => {
          console.error('Error deleting animal:', error);
          alert('Error deleting animal. Please try again later.');
        }
      );
    }
  }
}
