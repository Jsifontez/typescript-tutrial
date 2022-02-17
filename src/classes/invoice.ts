export class Invoice {
  /**
   * all the properties created below are public
   * which means that when we create an instance of that class, we can access to all that properties
   * we can change it if we want, after the initial instance of the class
   * to do that we use access modifiers like:
   * 'public': the default value. We can access and modify the property outside the class
   * 'private': We can access to the property inside the function but not outside. Like a 'Class.property'
   * 'readonly': We can read the property from outside and inside but we can't change it
   */
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor (
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format () {
    return `${this.client} owes £${this.amount} form ${this.details}`
  }
}
