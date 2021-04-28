import anyword from './index'

describe('Test', () => {
  test('should run the test', () => {
    const tModule = anyword
    expect(typeof tModule).toBe('function')
  })
  it('should test', () => {
    expect(1).toBe(1)
  })
})
