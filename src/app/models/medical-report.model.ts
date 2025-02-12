
import { Animal } from './animal.model';

export interface MedicalReport {
  id?: number;
  observation: string;
  medicalHistory: string;
  animal?: Animal;
}
