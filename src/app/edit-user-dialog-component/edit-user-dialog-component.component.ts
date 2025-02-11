import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AnimalsService } from '../services/animals.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog-component.component.html',
  styleUrls: ['./edit-user-dialog-component.component.css']
})

export class EditUserDialogComponent {
  user: any;

  constructor(
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private animalsService: AnimalsService
  ) {
    this.user = data.user;
  }

  save() {
    this.animalsService.updateUser(this.user).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
