// src/app/models/user.model.ts

export interface User {
    id?: string;  // Optional if it's not required during user creation
    username: string;
    email: string;
    password: string;
    role: string[];  // Assuming the user can have multiple roles
  }  