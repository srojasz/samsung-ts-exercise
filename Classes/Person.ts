import Address from './Address';
import MailContact from './MailContact';
import TelephoneContact from './TelephoneContact';
import { Gender } from '../Types';

class Person {
    private name: string;
    private surname: string;
    private age: number;
    private dni: string;
    private birthday: string;
    private favColour: string;
    private gender: Gender;
    private addresses: Address[];
    private mails: MailContact[];
    private telephones: TelephoneContact[];
    private notes: string[];

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
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.dni = dni;
        this.birthday = birthday;
        this.favColour = favColour;
        this.gender = gender;
        this.addresses = addresses;
        this.mails = mails;
        this.telephones = telephones,
        this.notes = notes;
    }

    public get_name(): string {
        return this.name;
    }

    public get_surname(): string {
        return this.surname;
    }

    public get_age(): number {
        return this.age;
    }

    public get_dni(): string {
        return this.dni;
    }

    public get_birthday(): string {
        return this.birthday;
    }

    public get_favColour(): string {
        return this.favColour;
    }

    public get_gender(): Gender {
        return this.gender;
    }

    public get_addresses(): Address[] {
        return this.addresses;
    }

    public add_address(address: Address): void {
        this.addresses.push(address);
    }

    public get_telephones(): TelephoneContact[] {
        return this.telephones;
    }

    public add_telephone(telephone: TelephoneContact): void {
        this.telephones.push(telephone);
    }

    public get_mails(): MailContact[] {
        return this.mails;
    }

    public add_mail(mail: MailContact): void {
        this.mails.push(mail);
    }

    public get_notes(): string[] {
        return this.notes;
    }
}
export default Person;
