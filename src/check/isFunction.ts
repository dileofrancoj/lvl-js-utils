import type { AnyFunction } from '../types/helpers'

export function isFunction (value: unknown): value is AnyFunction {
  return typeof value === 'function'
}
