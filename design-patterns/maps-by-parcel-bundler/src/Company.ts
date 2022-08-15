import { faker } from '@faker-js/faker'
import { Mappable } from './GoogleMap'

export class Company implements Mappable {
  id: string
  name: string
  catchPhrase: string
  location: {
    lat: number,
    lng: number,
  }

  constructor () {
    this.id = faker.datatype.uuid()
    this.name = faker.company.name()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    }
  }

  markerContent (): string {
    return `Company: ${this.name}`
  }
}
