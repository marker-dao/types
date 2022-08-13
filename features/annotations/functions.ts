const add = (a: number, b: number): number => {
  return a + b
}

function divide (a: number, b: number): number {
  return a / b
}

const multiply = function (a: number, b: number): number {
  return a * b
}
/**
 * Void
 */
function logger (message: string): void {
  console.log(message)
}
/**
 * Never
 */
function throwError1 (message: string): never {
  throw new Error(message)
}

function throwError2 (message: string): string {
  if (message) {
    throw new Error(message)
  }
  
  return ''
}

function throwError3 (message: string): void {
  if (message) {
    throw new Error(message)
  }
}
