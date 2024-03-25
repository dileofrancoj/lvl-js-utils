// hola -> Hola
import { describe, expect, it } from 'vitest'

import { capitalize } from '../capitalize'

describe('capitalize', () => {
  // it('capitalize("coca cola") should be "Coca cola', () => {})
  it('capitalize("coca cola") should be "Coca Cola"')
  const result = capitalize('coca cola')
  expect(result).toBe('Coca Cola')
})
