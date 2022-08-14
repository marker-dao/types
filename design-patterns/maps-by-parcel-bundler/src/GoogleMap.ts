interface Location {
  lat: number
  lng: number
}

export class GoogleMap {
  private googleMap: google.maps.Map

  constructor (elementId: string) {
    const options = {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 2,
    }
    const el = document.getElementById(elementId) as HTMLElement

    this.googleMap = new google.maps.Map(el, options)
  }

  addMarker (location: Location): void {
    const opts = {
      map: this.googleMap,
      position: {
        lat: location.lat,
        lng: location.lng,
      }
    }

    new google.maps.Marker(opts)
  }
}
