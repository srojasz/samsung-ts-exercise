import {ContactType} from '../Types';

class MailContact {
    mail: string;
    type: ContactType;

    constructor(mail: string, type: ContactType) {
        this.mail = mail;
        this.type = type;
    }
}

export default MailContact;