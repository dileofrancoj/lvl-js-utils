import { describe, expect, it } from 'vitest'

import { includes } from '../includes'

describe('includes', () => {
  it('includes("hola","ho") should be true', () => {
    const result = includes('hola', 'ho')
    expect(result).toBe(true)
  })

  it('should return false if first argument is undefined', () => {
    // @ts-expect-error we want to test the undefined case
    expect(includes(undefined, 'all')).toBe(false)
  })

  it('should return false if first argument is null', () => {
    // @ts-expect-error we want to test the undefined case
    expect(includes(null, 'all')).toBe(false)
  })

  it('should return false if first argument is a number', () => {
    // @ts-expect-error we want to test the undefined case
    expect(includes(111, 'all')).toBe(false)
  })
})
