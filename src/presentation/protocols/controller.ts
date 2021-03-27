import { HttpResponse, HttpRequest } from '../protocols/https'

export interface Controller {
  handle: (httpRequest: HttpRequest) => HttpResponse
}
