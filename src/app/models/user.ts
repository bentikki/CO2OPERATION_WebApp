export class User {

    UserID: number;
    name: string;
    email: string;

    
    private _username : string;
    public get username() : string {
        this._username = this.email.substr(0, this.email.indexOf('@'));
        return this._username;
    }


    
}
