import Person from "./Classes/Person";
import Address from "./Classes/Address";
import TelephoneContact from "./Classes/TelephoneContact";
import { firstPerson, secondPerson, thirdPerson } from "./peopleData";
import MailContact from "./Classes/MailContact";

// Require promp dependencies.
const prompt: any = require("prompt");
prompt.start();

// Keep contacts in an array.
const agendaContact: Person[] = [firstPerson, secondPerson, thirdPerson];

// Functions.
async function updateDataContactHandler(): Promise<void> {
  console.log(
    "We need to know which contact you want to update!"
  );

  const { dni } = await prompt.get(["dni"]);
  try {
    const contactToEdit: Person = searchPersonByDNI(dni);
    if (contactToEdit) {
      await addAddress(contactToEdit);
      await addTelephone(contactToEdit);
      await addMail(contactToEdit);
      console.log(contactToEdit, 'contact edited!')
    } else {
      console.log(
        "The DNI introduced does not match with any of your contacts!"
      );
    }
  } catch (err) {
    console.log(err.message);
  }
}

function searchPersonByDNI(dni: string): Person {
  const person = agendaContact.find((person) => person.get_dni() === dni);
  if (!person) {
    throw new Error("Person not found");
  }
  return person;
}

async function addAddress(contact: Person): Promise<void> {
  console.log(
    "Would you like to add a new address to this contact? Please, write down the information we need to proccess changes successfully"
  );

  const { newRoad, newNumber, newFloor, newLetter, newZip, newLocation, newState } = await prompt.get([
    "newRoad",
    "newNumber",
    "newFloor",
    "newLetter",
    "newZip",
    "newLocation",
    "newState",
  ]);
  try {
    const addressToAdd: Address = new Address(
      newRoad,
      newNumber,
      newFloor,
      newLetter,
      newZip,
      newLocation,
      newState
    );
  
    // Set Address to array.
    contact.add_address(addressToAdd);
  } catch {
    console.log("We couldn't update the address, please check data introduced!");

  }
}

async function addTelephone(contact: Person): Promise<void> {
  console.log(
    "To add a new telephone, we need a new number and a new type (personal/professional)."
  );
  const { newNumber, newType } = await prompt.get(["newNumber", "newType"]);
  const newTelephoneToAdd: TelephoneContact = new TelephoneContact(
    parseInt(newNumber),
    newType
  );

  // Set new telephone.
  contact.add_telephone(newTelephoneToAdd);
}

async function addMail(contact: Person): Promise<void> {
  console.log(
    "To add a new mail, we need a new mail and a new type (personal/professional)."
  );
  const { newMail, newType } = await prompt.get(["newMail", "newType"]);
  const newMailtoAdd: MailContact = new MailContact(newMail, newType);

  // Set new email.
  contact.add_mail(newMailtoAdd);
}

// Show registers by console log.
console.log(firstPerson, "first register");
console.log(secondPerson, "second register");
console.log(thirdPerson, "third register");

// Update data.
updateDataContactHandler()
  .catch(() => console.error('Something went wrong!'));
