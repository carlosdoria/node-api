import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../protocols/https'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
