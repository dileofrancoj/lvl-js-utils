export function typeOf(value: unknown): unknown {
  return value === null ? 'null' : typeof value
}
