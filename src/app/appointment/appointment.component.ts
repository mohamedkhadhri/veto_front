// appointment.component.ts
import { Component, Inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; // Importez ce module
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment.model';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  standalone: true,
  imports: [MatTableModule] // Ajoutez ici
})
export class AppointmentComponent {
  appointments: Appointment[] = [];
  displayedColumns: string[] = ['title', 'description', 'date', 'actions'];

  constructor(
    private appointmentService: AppointmentService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe(
      (appointments) => {
        this.appointments = appointments;
      },
      (error) => {
        this.snackBar.open('Échec du chargement des rendez-vous', 'Fermer', {
          duration: 3000,
        });
      }
    );
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: Appointment | undefined) => {
      if (result) {
        this.appointmentService.createAppointment(result).subscribe(
          (newAppointment) => {
            this.appointments.push(newAppointment);
            this.snackBar.open('Rendez-vous créé avec succès', 'Fermer', {
              duration: 3000,
            });
          },
          (error) => {
            this.snackBar.open('Échec de la création du rendez-vous', 'Fermer', {
              duration: 3000,
            });
          }
        );
      }
    });
  }

  editAppointment(appointment: Appointment): void {
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      width: '400px',
      data: { ...appointment },
    });

    dialogRef.afterClosed().subscribe((result: Appointment | undefined) => {
      if (result && result.id) {
        this.appointmentService.updateAppointment(result.id, result).subscribe(
          (updatedAppointment) => {
            if (updatedAppointment) {
              const index = this.appointments.findIndex(
                (a) => a.id === updatedAppointment.id
              );
              if (index !== -1) {
                this.appointments[index] = updatedAppointment;
                this.snackBar.open('Rendez-vous mis à jour avec succès', 'Fermer', {
                  duration: 3000,
                });
              }
            } else {
              this.snackBar.open('Échec de la mise à jour du rendez-vous', 'Fermer', {
                duration: 3000,
              });
            }
          },
          (error) => {
            this.snackBar.open('Erreur lors de la mise à jour du rendez-vous', 'Fermer', {
              duration: 3000,
            });
          }
        );
      }
    });
  }

  deleteAppointment(id: number | null): void {
    if (id !== null) {
      this.appointmentService.deleteAppointment(id).subscribe(
        () => {
          this.snackBar.open('Rendez-vous supprimé avec succès', 'Fermer', {
            duration: 3000,
          });
          this.loadAppointments();
        },
        (error) => {
          this.snackBar.open('Échec de la suppression du rendez-vous', 'Fermer', {
            duration: 3000,
          });
        }
      );
    } else {
      this.snackBar.open('ID invalide', 'Fermer', { duration: 3000 });
    }
  }
}