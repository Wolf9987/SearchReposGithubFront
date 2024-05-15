
export class UserTkn {
    
}

export class User {
    //public userId: string = "";
    //public fullName: string = "";
    public email: string = "";
    public name: string = "";
    //public roles: string[] = [];
  
    constructor( email: string, name: string) {
      
      
      this.email = email;
      this.name = name;
      
    }
}