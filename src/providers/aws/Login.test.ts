import Login, { AWS_LOGIN_COMMAND, AWS_LOGIN_DESCRIPTION } from './Login';

describe('Login', () => {
  describe('constructor', () => {
    it('should set command sting and description', () => {
      // Arrange
      const expected_command_string = AWS_LOGIN_COMMAND;
      const expected_command_description = AWS_LOGIN_DESCRIPTION;

      // Act
      const sut = new Login();

      // Assert
      expect(sut.command).toEqual(expected_command_string);
      expect(sut.description).toEqual(expected_command_description);
    });
  });
});
