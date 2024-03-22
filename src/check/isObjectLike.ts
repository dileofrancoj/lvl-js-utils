import { typeOf } from '@/misc'

type GenericObject = Record<string | number, unknown>

export function isSpecificObject(value: unknown): value is GenericObject {
  return (
    !(value instanceof Date) &&
    !(value instanceof RegExp) &&
    !Array.isArray(value) &&
    typeOf(value) === 'object'
  )
}

// 0.0.1 isObjectLike({name:'meli'}) // true
// 0.0.2 isObjectLike({name: 'meli'}) // isObjectLike no existe más
