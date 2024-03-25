import { describe, expect, test } from 'vitest'

import { isString } from '../isString'

describe('isString', () => {
  test.each([
    ['', true],
    [null, false],
    [undefined, false],
    [2, false],
    [{}, false]
  ])('isString(%j) should be %j', (arg, expected) => {
    expect(isString(arg)).toBe(expected)
  })
})
