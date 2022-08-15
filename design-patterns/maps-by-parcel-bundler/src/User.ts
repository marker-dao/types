import { faker } from '@faker-js/faker'

export class User {
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
