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
}
