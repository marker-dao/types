/**
 * Classes
 */
class Vehicle {
  /**
   * Props
   */
  // color: string
  /**
   * Constructor
   */
  // constructor (color: string = 'red') {
  //   this.color = color
  // }
  constructor (public color: string = 'red') {}
  /**
   * Methods
   */
  drive (): void {
    console.log('I\'m driving!')
  }

  stop (): void {
    console.log('I\'m stopped... ')
  }
}

class Car extends Vehicle {
  drive (): void {
    console.log('I\'m driving a car!')
  }
}

const vehicle = new Vehicle('black')
const car = new Car()

car.drive()
/**
 * Modifiers
 */
/**
 * public - доступен откуда угодно в любое время
 */
/**
 * private - может быть вызван только другими методами внутри того же класса
 */
class PrivateCar extends Car {
  // PRIVATE
  private washing (): void {
    console.log('I\'m driving a car!')
  }

  startWachingProcess (): void {
    this.washing()
  }

  // PROTECTED
  protected close (status: boolean): void {
    console.log(`
      The car are closed.
      Status: ${status}
    `)
  }
}

const privateCar = new PrivateCar()

// privateCar.washing() - don't working
privateCar.startWachingProcess() // it's working
/**
 * protected - может быть вызван другими методами внутри того же класса или другими методами внутри класса-наследника
 */
class ProtectedCar extends PrivateCar {
  constructor (public weight: number, color: string) {
    super(color)
  }

  setCloseStatus () {
    this.close(true)
  }
}

const protectedCar = new ProtectedCar(0, 'green')

protectedCar.setCloseStatus()
// protectedCar.close() // but this don't working
/**
 * Props
 */
console.log(protectedCar.color)
