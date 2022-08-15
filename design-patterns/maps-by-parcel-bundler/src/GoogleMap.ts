export interface Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }
  markerContent (): string
}

export class GoogleMap {
  private googleMap: google.maps.Map

  constructor (elementId: string) {
    const options = {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    }
    const el = document.getElementById(elementId) as HTMLElement

    this.googleMap = new google.maps.Map(el, options)
  }

  addMarker (object: Mappable): void {
    const opts = {
      map: this.googleMap,
      position: {
        lat: object.location.lat,
        lng: object.location.lng,
      }
    }

    const marker = new google.maps.Marker(opts)

    marker.addListener('click', () => this.onClickMarker(object.markerContent(), marker))
  }

  private onClickMarker (content: string, marker: google.maps.Marker): void {
    const infoWindow = new google.maps.InfoWindow({ content })

    infoWindow.open(this.googleMap, marker)
  }
}
