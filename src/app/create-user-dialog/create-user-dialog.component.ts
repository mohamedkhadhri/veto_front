import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.css']
})
export class CreateUserDialogComponent {
  userForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    // Initialiser le formulaire avec validation et définir le rôle par défaut à ['doc']
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['doc', [Validators.required]]  // Valeur par défaut du rôle
    });
  }

  // Sauvegarde de l'utilisateur
  save() {
    if (this.userForm.invalid) {
      return;
    }

    // Envoi des données du formulaire via le UserService
    this.userService.addUser(this.userForm.value).subscribe(
      (newUser) => {
        this.dialogRef.close(newUser);  // Fermer le dialogue avec l'utilisateur ajouté
      },
      (error) => {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
        alert('Une erreur est survenue lors de la création de l\'utilisateur.');
      }
    );
  }

  // Annulation de la création de l'utilisateur
  cancel() {
    this.dialogRef.close(null);
  }
}
