import { IAccountModel } from '../models/account'

export interface INewAccountModel {
  name: string
  email: string
  password: string
}

export interface IAddAccount {
  add: (account: INewAccountModel) => IAccountModel
}
