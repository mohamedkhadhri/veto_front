export class SignupRequest {
    username: string;
    email: string;
    password: string;
    role: string[];  // Le rôle est maintenant un tableau de chaînes

    constructor(username: string, email: string, password: string) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.role = ["client"]
    }
}
