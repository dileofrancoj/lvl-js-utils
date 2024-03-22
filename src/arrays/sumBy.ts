import { arrayable } from './arraylable'

export function sumBy<T>(dataSource: T[], accesor: (item: T) => number): number {
  return arrayable(dataSource).reduce(
    (sum: number, item: T) => sum + accesor(item), 0
  )
}
