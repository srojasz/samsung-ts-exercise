"use strict";
exports.__esModule = true;
exports.thirdPerson = exports.secondPerson = exports.firstPerson = void 0;
var Person_1 = require("./Classes/Person");
var Address_1 = require("./Classes/Address");
var MailContact_1 = require("./Classes/MailContact");
var TelephoneContact_1 = require("./Classes/TelephoneContact");
// First person data.
var firstAddress = new Address_1["default"]("Mayor", 5, 5, "B", 28922, "Alcorcón", "Madrid");
var firstPersonalMail = new MailContact_1["default"]("sallyhigh@gmail.com", "personal");
var firstProfessionalTel = new TelephoneContact_1["default"](65555555, "professional");
var notes = "Le gusta mucho ir a pescar";
// Second person data.
var secondAddress = new Address_1["default"]("Norte", 6, 1, "A", 28080, "Madrid", "Madrid");
var secondPersonalMail = new MailContact_1["default"]("paulpaul@hotmail.com", "personal");
var secondProfessionalMail = new MailContact_1["default"]("paulprof@paul.com", "professional");
var secondPersonalTel = new TelephoneContact_1["default"](679000000, "personal");
// Third person data.
var thirdAddress = new Address_1["default"]("Sur", 4, 0, "B", 46001, "Valencia", "Valencia");
var thirdPersonalMail = new MailContact_1["default"]("luna@yahoo.com", "personal");
var thirdProfessionalTel = new TelephoneContact_1["default"](678909090, "professional");
var thirdPersonalTel = new TelephoneContact_1["default"](698989898, "personal");
var thirdNotes = "Alergia a la leche";
// Export contacts registered.
exports.firstPerson = new Person_1["default"]("Sally", "High", 34, "889988G", "27-03", "green", "female", [firstAddress], [firstPersonalMail], [firstProfessionalTel], [notes]);
exports.secondPerson = new Person_1["default"]("Paul", "Smith", 27, "345667H", "14-04", "red", "male", [secondAddress], [secondPersonalMail, secondProfessionalMail], [secondPersonalTel], []);
exports.thirdPerson = new Person_1["default"]("Luna", "Hoffmann", 67, "50980000T", "15-09", "blue", "female", [thirdAddress], [thirdPersonalMail], [thirdPersonalTel, thirdProfessionalTel], [thirdNotes]);
