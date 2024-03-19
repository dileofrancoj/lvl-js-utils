// Función que verifica si un array o un objeto está vacío y devuelve true si lo está o false si no lo está

// isEmpty('franco') // true
// isEmpty([]) // true
// isempty({}) // true
// isEmpty([1]) // false
export function isEmpty (object: unknown): boolean {
  const safeObject = object
  const isCountable =
    safeObject instanceof Object || safeObject instanceof Array
  if (!isCountable) return true
  return Object.entries(safeObject).length === 0
}
