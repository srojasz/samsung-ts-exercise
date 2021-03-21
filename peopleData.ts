import Person from "./Classes/Person";
import Address from "./Classes/Address";
import MailContact from "./Classes/MailContact";
import TelephoneContact from "./Classes/TelephoneContact";

// First person data.
const firstAddress = new Address(
  "Mayor",
  5,
  5,
  "B",
  28922,
  "Alcorcón",
  "Madrid"
);
const firstPersonalMail = new MailContact("sallyhigh@gmail.com", "personal");
const firstProfessionalTel = new TelephoneContact(65555555, "professional");
const notes = "Le gusta mucho ir a pescar";

// Second person data.
const secondAddress = new Address(
  "Norte",
  6,
  1,
  "A",
  28080,
  "Madrid",
  "Madrid"
);
const secondPersonalMail = new MailContact("paulpaul@hotmail.com", "personal");
const secondProfessionalMail = new MailContact(
  "paulprof@paul.com",
  "professional"
);
const secondPersonalTel = new TelephoneContact(679000000, "personal");

// Third person data.
const thirdAddress = new Address(
  "Sur",
  4,
  0,
  "B",
  46001,
  "Valencia",
  "Valencia"
);
const thirdPersonalMail = new MailContact("luna@yahoo.com", "personal");
const thirdProfessionalTel = new TelephoneContact(678909090, "professional");
const thirdPersonalTel = new TelephoneContact(698989898, "personal");
const thirdNotes = "Alergia a la leche";

// Export contacts registered.
export const firstPerson = new Person(
  "Sally",
  "High",
  34,
  "889988G",
  "27-03",
  "green",
  "female",
  [firstAddress],
  [firstPersonalMail],
  [firstProfessionalTel],
  [notes]
);

export const secondPerson = new Person(
  "Paul",
  "Smith",
  27,
  "345667H",
  "14-04",
  "red",
  "male",
  [secondAddress],
  [secondPersonalMail, secondProfessionalMail],
  [secondPersonalTel],
  []
);

export const thirdPerson = new Person(
  "Luna",
  "Hoffmann",
  67,
  "50980000T",
  "15-09",
  "blue",
  "female",
  [thirdAddress],
  [thirdPersonalMail],
  [thirdPersonalTel, thirdProfessionalTel],
  [thirdNotes]
);
