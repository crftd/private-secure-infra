import Check, { AWS_CHECK_COMMAND, AWS_CHECK_DESCRIPTION } from './Check';

describe('Check', () => {
  describe('constructor', () => {
    it('should set command sting and description', () => {
      // Arrange
      const expected_command_string = AWS_CHECK_COMMAND;
      const expected_command_description = AWS_CHECK_DESCRIPTION;

      // Act
      const sut = new Check();

      // Assert
      expect(sut.command).toEqual(expected_command_string);
      expect(sut.description).toEqual(expected_command_description);
    });
  });
});
