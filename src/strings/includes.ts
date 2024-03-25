import { isString } from '@/check'

export function includes(
  stringValue: string,
  searchableValue: string
): boolean {
  return isString(stringValue) && isString(searchableValue)
    ? stringValue.includes(searchableValue)
    : false
}
