/**
 * whe you export and interface, to be able use with a clase tou should use 'implements [interface name]'
 * in that way the class must have the structure of the interface implemented
 */
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owes £${this.amount} form ${this.details}`;
    }
}
