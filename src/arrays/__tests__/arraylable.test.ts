import { describe, expect, test } from 'vitest'

import { arrayable } from '../arraylable'

describe('arraylable', () => {
  test.each([
    [null, []],
    [{}, []],
    [
      [1, 2, 3],
      [1, 2, 3]
    ],
    [['some-value'], ['some-value']],
    [1, []],
    [() => {}, []]
  ])('arraylable(%j) should be %j', (arg, expected) => {
    // @ts-expect-error should accept any value
    expect(arrayable(arg)).toStrictEqual(expected)
  })
})
