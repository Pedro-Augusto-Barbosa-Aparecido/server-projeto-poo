export class NUllishParameters extends Error {
  constructor (message?: string) {
    super(message)
    this.name = "NUllishParameters";
  }
}