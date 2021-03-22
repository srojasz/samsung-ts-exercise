"use strict";
exports.__esModule = true;
var TelephoneContact = /** @class */ (function () {
    function TelephoneContact(telephone, type) {
        this.telephone = telephone;
        this.type = type;
    }
    TelephoneContact.prototype.set_telephone_number = function (telephone) {
        this.telephone = telephone;
    };
    TelephoneContact.prototype.set_telephone_type = function (type) {
        this.type = type;
    };
    return TelephoneContact;
}());
exports["default"] = TelephoneContact;
