import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AnimalsService } from '../services/animals.service';

@Component({
  standalone: false,
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.css']
})
export class CreateUserDialogComponent {
  user: any = { username: '', email: '', password: '', role: ['admin'] };

  constructor(
    public dialogRef: MatDialogRef<CreateUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private animalsService: AnimalsService
  ) {
    this.user = data.user || { username: '', email: '', password: '', role: ['doc'] };
  }

  save() {
    this.dialogRef.close(this.user);
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
