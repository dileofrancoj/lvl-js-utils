import { isString } from '@/check'

export function capitalize(s: string): string {
  // coca cola -> ['coca', 'cola']
  if (!isString(s)) return s
  const splittedString = s.split(' ')
  return splittedString.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }).join(' ')
}
