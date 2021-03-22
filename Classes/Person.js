"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, surname, age, dni, birthday, favColour, gender, addresses, mails, telephones, notes) {
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
    Person.prototype.get_name = function () {
        return this._name;
    };
    Person.prototype.get_surname = function () {
        return this._surname;
    };
    Person.prototype.get_age = function () {
        return this._age;
    };
    Person.prototype.get_dni = function () {
        return this._dni;
    };
    Person.prototype.get_birthday = function () {
        return this._birthday;
    };
    Person.prototype.get_favColour = function () {
        return this._favColour;
    };
    Person.prototype.get_gender = function () {
        return this._gender;
    };
    Person.prototype.get_addresses = function () {
        return this._addresses;
    };
    Person.prototype.add_address = function (address) {
        this._addresses.push(address);
    };
    Person.prototype.get_telephones = function () {
        return this._telephones;
    };
    Person.prototype.add_telephone = function (telephone) {
        this._telephones.push(telephone);
    };
    Person.prototype.get_mails = function () {
        return this._mails;
    };
    Person.prototype.add_mail = function (mail) {
        this._mails.push(mail);
    };
    Person.prototype.get_notes = function () {
        return this._notes;
    };
    return Person;
}());
exports["default"] = Person;
