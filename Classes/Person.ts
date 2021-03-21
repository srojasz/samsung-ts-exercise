import Address from './Address';
import MailContact from './MailContact';
import TelephoneContact from './TelephoneContact';
import { Gender } from '../Types';

class Person {
    private _name: string;
    private _surname: string;
    private _age: number;
    private _dni: string;
    private _birthday: string;
    private _favColour: string;
    private _gender: Gender;
    private _addresses: Address[];
    private _mails: MailContact[];
    private _telephones: TelephoneContact[];
    private _notes: string[];

    constructor(
        name:string,
        surname:string,
        age:number,
        dni:string,
        birthday:string,
        favColour:string,
        gender:Gender,
        addresses:Address[],
        mails:MailContact[],
        telephones:TelephoneContact[],
        notes:string[],
    ) {
        this._name = name;
        this._surname = surname;
        this._age = age;
        this._dni = dni;
        this._birthday = birthday;
        this._favColour = favColour;
        this._gender = gender;
        this._addresses = addresses;
        this._mails = mails;
        this._telephones = telephones,
        this._notes = notes;
    }

    public get_name(): string {
        return this._name;
    }

    public get_surname(): string {
        return this._surname;
    }

    public get_age(): number {
        return this._age;
    }

    public get_dni(): string {
        return this._dni;
    }

    public get_birthday(): string {
        return this._birthday;
    }

    public get_favColour(): string {
        return this._favColour;
    }

    public get_gender(): Gender {
        return this._gender;
    }

    public get_addresses(): Address[] {
        return this._addresses;
    }

    public add_address(address: Address): void {
        this._addresses.push(address);
    }

    public get_telephones(): TelephoneContact[] {
        return this._telephones;
    }

    public add_telephone(telephone: TelephoneContact): void {
        this._telephones.push(telephone);
    }

    public get_mails(): MailContact[] {
        return this._mails;
    }

    public add_mail(mail: MailContact): void {
        this._mails.push(mail);
    }

    public get_notes(): string[] {
        return this._notes;
    }
}
export default Person;
