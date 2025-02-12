import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/users.service';  // Change to UserService
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add ReactiveFormsModule here
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog-component.component.html', // Ensure template is correctly referenced
  styleUrls: ['./edit-user-dialog-component.component.css'],
  imports: [
    CommonModule, // Include CommonModule
    FormsModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class EditUserDialogComponent {
  userForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private userService: UserService  // Use UserService
  ) {
    // Initialize form group with validation
    this.userForm = this.formBuilder.group({
      username: [this.data.user.username, [Validators.required, Validators.maxLength(20)]],
      email: [this.data.user.email, [Validators.required, Validators.email]],
      password: [this.data.user.password, [Validators.required, Validators.minLength(6)]],
      roles: [this.data.user.roles, [Validators.required]]
    });
  }

  // Save updated user data
  save() {
    if (this.userForm.invalid) {
      return;
    }

    this.userService.updateUser(this.data.user.id, this.userForm.value).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  // Close dialog without saving
  cancel() {
    this.dialogRef.close(false);
  }
}
