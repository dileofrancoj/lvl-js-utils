import type { AnyFunction } from '@/types/helpers'

// Devolver una función (callback) => void

/*
function greet(name: string, age: number) {
    console.log(`Hello ${name}: you are ${age} years old`)
}
 */

// type greetTypes = Parameters<typeof greet> // tupla (string, number)
// ¿Parameters === Return type?

export function debounce<T extends AnyFunction>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  // let timeoutId: ReturnType<typeof setTimeout> // @types/node
  // Parameters -> Record<string, value>
  // ReturnType<typeof fn> -> valor de retorno de la función
  let timeoutId: NodeJS.Timeout
  return function debouncedFunction(...args: Parameters<T>): void {
    if (timeoutId !== undefined) {
      // clearTimeout limpia la referencia del timer (resetea el timer)
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}
