import { faker } from '@faker-js/faker'
import { Mappable } from './GoogleMap'

export class User implements Mappable {
  id: string
  name: string
  location: {
    lat: number,
    lng: number,
  }

  constructor () {
    this.id = faker.datatype.uuid()
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    }
  }

  markerContent (): string {
    return `User: ${this.name}`
  }
}
