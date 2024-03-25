import { describe, expect, test } from 'vitest'

import { isEmpty } from '..'

describe('isEmpty', () => {
  test.each([
    { expected: true, label: 'null', tested: null },
    { expected: true, label: 'undefined', tested: undefined },
    { expected: true, label: '{}', tested: '{}' },
    { expected: true, label: 'new Date()', tested: new Date() },
    { expected: true, label: '/d+/', tested: /d+/ },
    { expected: false, label: '[1,2]', tested: [1, 2] },
    { expected: true, label: '', tested: '' }
  ])('isEmpty($label) should be $expected', ({ tested, expected }) => {
    expect(isEmpty(tested)).toBe(expected)
  })
})
