"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Address_1 = require("./Classes/Address");
var TelephoneContact_1 = require("./Classes/TelephoneContact");
var peopleData_1 = require("./peopleData");
var MailContact_1 = require("./Classes/MailContact");
// Require promp dependencies.
var prompt = require("prompt");
prompt.start();
// Keep contacts in an array.
var agendaContact = [peopleData_1.firstPerson, peopleData_1.secondPerson, peopleData_1.thirdPerson];
// Functions.
function updateDataContactHandler() {
    return __awaiter(this, void 0, void 0, function () {
        var dni, contactToEdit, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("We need to know which contact you want to update!");
                    return [4 /*yield*/, prompt.get(["dni"])];
                case 1:
                    dni = (_a.sent()).dni;
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 8, , 9]);
                    contactToEdit = searchPersonByDNI(dni);
                    if (!contactToEdit) return [3 /*break*/, 6];
                    return [4 /*yield*/, addAddress(contactToEdit)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, addTelephone(contactToEdit)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, addMail(contactToEdit)];
                case 5:
                    _a.sent();
                    console.log(contactToEdit, 'contact edited!');
                    return [3 /*break*/, 7];
                case 6:
                    console.log("The DNI introduced does not match with any of your contacts!");
                    _a.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    err_1 = _a.sent();
                    console.log(err_1.message);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
function searchPersonByDNI(dni) {
    var person = agendaContact.find(function (person) { return person.get_dni() === dni; });
    if (!person) {
        throw new Error("Person not found");
    }
    return person;
}
function addAddress(contact) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, road, number, floor, letter, zip, location, state, addressToAdd;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("Would you like to add a new address to this contact? Please, write down the information we need to proccess changes successfully");
                    return [4 /*yield*/, prompt.get([
                            "road",
                            "number",
                            "floor",
                            "letter",
                            "zip",
                            "location",
                            "state",
                        ])];
                case 1:
                    _a = _b.sent(), road = _a.road, number = _a.number, floor = _a.floor, letter = _a.letter, zip = _a.zip, location = _a.location, state = _a.state;
                    try {
                        addressToAdd = new Address_1["default"](road, number, floor, letter, zip, location, state);
                        // Set Address to array.
                        contact.add_address(addressToAdd);
                    }
                    catch (_c) {
                        console.log("We couldn't update the address, please check data introduced!");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function addTelephone(contact) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, telephone, type, newTelephoneToAdd;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("To add a new telephone, we need a new number and a new type (personal/professional).");
                    return [4 /*yield*/, prompt.get(["telephone", "type"])];
                case 1:
                    _a = _b.sent(), telephone = _a.telephone, type = _a.type;
                    newTelephoneToAdd = new TelephoneContact_1["default"](telephone, type);
                    // Set new telephone.
                    contact.add_telephone(newTelephoneToAdd);
                    return [2 /*return*/];
            }
        });
    });
}
function addMail(contact) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, mail, type, newMailtoAdd;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("To add a new mail, we need a new mail and a new type (personal/professional).");
                    return [4 /*yield*/, prompt.get(["mail", "type"])];
                case 1:
                    _a = _b.sent(), mail = _a.mail, type = _a.type;
                    newMailtoAdd = new MailContact_1["default"](mail, type);
                    // Set new email.
                    contact.add_mail(newMailtoAdd);
                    return [2 /*return*/];
            }
        });
    });
}
// Show registers by console log.
console.log(peopleData_1.firstPerson, "first register");
console.log(peopleData_1.secondPerson, "second register");
console.log(peopleData_1.thirdPerson, "third register");
// Update data.
updateDataContactHandler()["catch"](function () { return console.error('Something went wrong!'); });
