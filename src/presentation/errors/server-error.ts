export class ServerError extends Error {
  constructor () {
    super('An unexpected error has occurred on the server')
    this.name = 'ServerError'
  }
}
