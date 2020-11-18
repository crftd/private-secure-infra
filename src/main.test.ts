import Main from './main';

describe('main', () => {
  it('should run jest', () => {
    // Arrange
    const expected_result = 1;
    const main = new Main();
    // Act
    const actual_result = main.foo();
    // Assert
    expect(actual_result).toEqual(expected_result);
  });
});