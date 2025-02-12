import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/users.service';  // Importez UsersService
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
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
  styleUrls: ['./users-list.component.css']
})
export class UsersComponent implements OnInit {
  users$!: Observable<any>;
  displayedColumns: string[] = ['username', 'email', 'roles', 'actions'];
  dataSource!: MatTableDataSource<any>;

  // Utilisation de @Inject pour résoudre le problème d'injection
  constructor(@Inject(UserService) private usersService: UserService, public dialog: MatDialog) {}

  ngOnInit() {
    this.loadUsers();
  }

  // Méthode pour charger les utilisateurs et mettre à jour la source de données
  loadUsers() {
    this.users$ = this.usersService.getUsers();
    this.users$.subscribe((users: any) => {
      this.dataSource = new MatTableDataSource(users);
    });
  }

  // Ouvrir le dialogue pour modifier un utilisateur
  editUser(user: any) {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '400px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Mettre à jour la table après modification
        this.loadUsers(); // Rafraîchir les utilisateurs
      }
    });
  }

  // Supprimer un utilisateur
  deleteUser(user: any) {
    this.usersService.deleteUser(user.id).subscribe(() => {
      // Retirer l'utilisateur supprimé de la source de données
      const updatedData = this.dataSource.data.filter(u => u.id !== user.id);
      this.dataSource.data = [...updatedData]; // Forcer le rafraîchissement de la table
    });
  }

  // Ouvrir le dialogue pour créer un utilisateur
  createUser() {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
      width: '400px',
      data: { user: { username: '', email: '', password: '', roles: ['doc'] } } // Rôle par défaut
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usersService.addUser(result).subscribe(() => {
          // Rafraîchir la table après la création d'un utilisateur
          this.loadUsers(); // Recharger la liste des utilisateurs
        });
      }
    });
  }
}
