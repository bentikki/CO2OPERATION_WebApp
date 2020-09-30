import { LicenseInfo } from './licenseinfo';

export class SignUpModel {

    
    private _email : string;
    public get email() : string {
        return this._email;
    }
    public set email(v : string) {
        this._email = v;
    }
    
    
    private _password : string;
    public get password() : string {
        return this._password;
    }
    public set password(v : string) {
        this._password = v;
    }
    
    
    private _haveCar : boolean;
    public get haveCar() : boolean {
        return this._haveCar;
    }
    public set haveCar(v : boolean) {
        this._haveCar = v;
    }

    
    private _carModel : string;
    public get carModel() : string {
        return this._carModel;
    }
    public set carModel(v : string) {
        this._carModel = v;
    }
    
    
    private _userLat : string;
    public get userLat() : string {
        return this._userLat;
    }
    public set userLat(v : string) {
        this._userLat = v;
    }

    
    private _userLng : string;
    public get userLng() : string {
        return this._userLng;
    }
    public set userLng(v : string) {
        this._userLng = v;
    }
    
    licenseInfo : LicenseInfo;

}
