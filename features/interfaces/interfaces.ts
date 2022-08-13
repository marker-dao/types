interface Car {
  name: string
  year: number
  able: boolean
  summary (): string
}

interface Reportable {
  summary (): string
}

const civic = {
  name: 'Civic',
  year: 2000,
  able: false,
  summary (): string {
    return `
      Name: ${this.name}
      Year: ${this.year}
      Able: ${this.able}
    `
  }
}

const drink = {
  name: 'Cola',
  carbonated: true,
  sugar: 40,
  summary (): string {
    return `${this.name} has ${this.sugar}g of sugar`
  }
}

function printSummary (item: Reportable): void {
  console.log(item.summary())
}

printSummary(civic)
printSummary(drink)
