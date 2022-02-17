import { HasFormatter } from '../interfaces/HasFormatter.js'

/**
 * whe you export and interface, to be able use with a clase tou should use 'implements [interface name]'
 * in that way the class must have the structure of the interface implemented
 */

export class Payment implements HasFormatter {

  constructor (
    readonly recipient: string,
    private details: string,
    public amount: number
  ){}

  format () {
    return `${this.recipient} is owes £${this.amount} form ${this.details}`
  }
}
