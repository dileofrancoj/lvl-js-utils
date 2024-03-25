import { beforeEach, describe, expect, it, vi } from 'vitest'

import { throttle } from '../throttle'
// jest.mock()

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('should throttle a function 1 time', () => {
    const originalFn = vi.fn()
    const throttledFn = throttle(originalFn, 200)

    throttledFn(1)
    throttledFn(2)
    throttledFn(3)

    expect(originalFn).toHaveBeenCalledTimes(1)
    vi.advanceTimersByTime(300)
    throttledFn(1)
    throttledFn(1)
    throttledFn(1)
    throttledFn(1)
    expect(originalFn).toHaveBeenCalledTimes(2)
  })
})
