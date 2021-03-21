class Address {
    road: string;
    number: number;
    floor: number;
    letter: string;
    zip: number;
    location: string;
    state: string;

    constructor(
        road: string,
        number: number,
        floor: number,
        letter: string,
        zip: number,
        location: string,
        state: string
    ) {
        this.road = road;
        this.number = number;
        this.floor = floor,
        this.letter = letter,
        this.zip = zip,
        this.location = location,
        this.state = state
    }
}

export default Address;