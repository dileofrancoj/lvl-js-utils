import { type AnyFunction } from '@/types/helpers'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function throttle<T extends AnyFunction>(fn: T, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  return function throttledFn (...args: Parameters<T>) {
    // La función se ejecuta una vez y el callback queda inhabilitado durante 'delay' milisegundos
    // si el contador existe o ya está corriendo, no volver a ejecutar el callback
    if (timeoutId !== undefined) {
      return
    }
    // reiniciar el contador
    timeoutId = setTimeout(() => {
      timeoutId = undefined
    }, delay)

    return fn(...args)
  }
}
