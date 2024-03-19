export type MaybeId = number | string | null | undefined

export interface Identifiable {
  id: MaybeId
}

export type AnyFunction = (...args: unknown[]) => unknown
