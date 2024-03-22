import { typeOf } from '../misc'

export function isObject(value: unknown): boolean {
  return typeOf(value) === 'object'
}
