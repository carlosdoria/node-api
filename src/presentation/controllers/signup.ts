/* eslint-disable @typescript-eslint/no-explicit-any */
export class SignUpController {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handle (httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    }
  }
}