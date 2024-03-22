export function arrayable<T>(value: T[] | null): T[] | [] {
  return Array.isArray(value) ? value : []
}
