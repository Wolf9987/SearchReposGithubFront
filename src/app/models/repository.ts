export class Repository {

    public id: string;
    public avatar_url: string;
    public  name: string;
    public isInSession: boolean = false;

    constructor( id: string, avatar_url: string, name: string) {
        this.id = id;
        this.avatar_url = avatar_url;
        this.name = name;
                
      }
}