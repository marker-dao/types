import { User } from './User'
import { Company } from './Company'
import { GoogleMap } from './GoogleMap'

const user = new User()
const company = new Company()
const googleMap = new GoogleMap('map')

googleMap.addMarker(user.location)
googleMap.addMarker(company.location)
