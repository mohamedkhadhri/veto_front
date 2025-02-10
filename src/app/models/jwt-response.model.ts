export class JwtResponse {
    jwt: string;
    id: number;
    username: string;
    email: string;
    roles: string[];
  
    constructor(jwt: string, id: number, username: string, email: string, roles: string[]) {
      this.jwt = jwt;
      this.id = id;
      this.username = username;
      this.email = email;
      this.roles = roles;
    }
  }
  