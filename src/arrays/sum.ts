import { arrayable } from './arraylable'

export function sum(data: number[]): number {
  return arrayable(data).reduce((prev, current) => prev + current, 0)
}
