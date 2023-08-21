/**
 * Primitive class is a wrapper for primitive types to be used as a reference
 * @class Primitive
 * @template T
 */
export default class Primitive<T> {
  private value: T;

  /**
   * Creates an instance of Primitive.
   * @param value
   */
  constructor(value: T) {
    this.value = value;
  }

  /**
   * Returns the value of the primitive
   */
  get(): T {
    return this.value;
  }

  /**
   * Sets the value of the primitive
   * @param value
   */
  set(value: T) {
    this.value = value;
  }

  /**
   * Shorthand for creating a new instance of Primitive
   * @param value
   */
  public static of<T>(value: T): Primitive<T> {
    return new Primitive(value);
  }
}
