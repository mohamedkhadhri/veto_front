export interface Animal {
    id: number;
    name: string;
    age: number;
    race: string;
    image: string;
    gender: string;
    weight: number;
    vaccinations: any[];
    medicalReports: any[];
    owner?: string;
  }