import { HttpResponse, HttpRequest, Controller, IEmailValidator } from '../protocols'
import { badRequest, serverError } from '../helpers/http-helper'
import { InvalidParamError, MissingParamError } from '../errors'
import { IAddAccount } from '../../domain/usecases/add-account'

export class SignUpController implements Controller {
  private readonly emailValidator: IEmailValidator
  private readonly addAccountStub: IAddAccount

  constructor (emailValidator: IEmailValidator, addAccountStub: IAddAccount) {
    this.emailValidator = emailValidator
    this.addAccountStub = addAccountStub
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const { name, email, password, passwordConfirmation } = httpRequest.body

      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }

      const isValidEmail = this.emailValidator.isValid(email)
      if (!isValidEmail) {
        return badRequest(new InvalidParamError('email'))
      }

      this.addAccountStub.add({
        name,
        email,
        password
      })
    } catch (error) {
      return serverError()
    }
  }
}
