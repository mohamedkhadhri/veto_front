import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { Animal } from '../models/animal.model';  // Assurez-vous que ce modèle est correct
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import de CommonModule pour utiliser ngIf et ngFor

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css'],
  standalone: true,  // Déclarer que le composant est autonome
  imports: [CommonModule]  // Import de CommonModule pour rendre ngIf et autres directives disponibles
})
export class AnimalsListComponent implements OnInit {
  animals: Animal[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private animalsService: AnimalsService,  // Injection de service
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllAnimals();
  }

  getAllAnimals() {
    this.animalsService.getAllAnimals().subscribe(
      (response) => {
        this.animals = response;
        this.loading = false;
      },
      (error) => {
        this.error = 'Erreur lors de la récupération des animaux';
        this.loading = false;
      }
    );
  }

  onDeleteAnimal(id: number) {
    const confirmation = confirm('Êtes-vous sûr de vouloir supprimer cet animal ?');
    if (confirmation) {
      this.animalsService.deleteAnimal(id).subscribe(
        () => {
          this.animals = this.animals.filter((animal) => animal.id !== id);
          alert('L\'animal a été supprimé avec succès.');
        },
        (error) => {
          console.error('Erreur lors de la suppression de l\'animal:', error);
          alert('Erreur lors de la suppression de l\'animal.');
        }
      );
    }
  }

  onEditAnimal(id: number) {
    this.router.navigate([`/animal/edit/${id}`]);
  }

  onAddAnimal() {
    this.router.navigate(['/animal/add']);
  }
}