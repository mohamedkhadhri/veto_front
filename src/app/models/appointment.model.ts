export interface Appointment {
  id: number | null;
  date: Date;
  time: string;  // Ajoutez cette ligne pour l'heure
  status?: 'Pending' | 'Accepted' | 'Rejected'; // Vous pouvez définir les statuts possibles ici
  tel?: number;  // Facultatif
}

