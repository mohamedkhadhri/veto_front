import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { Animal } from '../models/animal.model';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css'],
  standalone: false
})
export class AnimalsListComponent implements OnInit {
  animals: Animal[] = [];

  constructor(private animalService: AnimalsService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.animalService.getAllUsers().subscribe(
      (response: any[]) => {
        console.log("USERS:", response);
        this.animals = response.flatMap(user => 
          user.animals.map((animal: Animal) => ({
            ...animal,
            owner: user.username
          }))
        );
      },
      (error) => {
        console.log("ERROR:", error);
      }
    );
  }

  onDetailsClick(animal: Animal) {
    alert(`You clicked on ${animal.name} owned by ${animal.owner}`);
  }

  setDefaultImage(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'assets/images/default-pet.png';
  }
}