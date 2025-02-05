import { Component } from '@angular/core';
import { AnimalsService } from '../services/animals.service';

@Component({
  selector: 'app-animals-list',
  standalone: false,
  
  templateUrl: './animals-list.component.html',
  styleUrl: './animals-list.component.css'
})
export class AnimalsListComponent {

  animals: any[] = [];

  constructor(private animalService: AnimalsService) { }

  ngOnInit(){
    this.getAllAnimals();
  }


  getAllAnimals(){
    this.animalService.getAllAnimals().subscribe(
      (response) => {
        console.log("ANIMALS : " , response)
        this.animals=response;
      },
      (error) => {
        console.log("ERROR : " , error)
      }
    )
  }

}
