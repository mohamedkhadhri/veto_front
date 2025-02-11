import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog-component/edit-user-dialog-component.component';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$!: Observable<any>;
  displayedColumns: string[] = ['username', 'email', 'password', 'roles', 'actions'];
  dataSource!: MatTableDataSource<any>;

  constructor(private animalsService: AnimalsService, public dialog: MatDialog) {}

  ngOnInit() {
    this.users$ = this.animalsService.getAllUsers();
    this.users$.subscribe((users: any) => {
      this.dataSource = new MatTableDataSource(users);
    });
  }

  // Open the Edit User dialog
  editUser(user: any) {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '400px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update the table data after editing
        this.users$ = this.animalsService.getAllUsers();
        this.users$.subscribe((users: any) => {
          this.dataSource = new MatTableDataSource(users);
        });
      }
    });
  }

  deleteUser(user: any) {
    this.animalsService.deleteUser(user.id).subscribe(() => {
      // Remove the deleted user from the data source
      const updatedData = this.dataSource.data.filter(u => u.id !== user.id);
      this.dataSource.data = [...updatedData]; // Force table refresh
    });
  }

  createUser() {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
      width: '400px',
      data: { user: { username: '', email: '', password: '', roles: ['doc'] } } // Default role
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.animalsService.createUser(result).subscribe(() => {
          // Refresh table after user creation
          this.users$ = this.animalsService.getAllUsers();
          this.users$.subscribe((users: any) => {
            this.dataSource.data = users;
          });
        });
      }
    });
  }
  

}
