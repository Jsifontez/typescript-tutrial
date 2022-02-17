//------------------Interfaces------------------------

/**
 * an interfac allow to create a certain type of structure over an object with
 * we can use it to tell what propeties, what methods or what types of the properties and the return of those methods are
 * this is different from a class because we don't use interefaces to create a new instances we use interfaces to create the structure, like functions
 */

export interface HasFormatter {
  format(): string;
}
