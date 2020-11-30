import Configure, { AWS_CONFIGURE_COMMAND, AWS_CONFIGURE_DESCRIPTION } from './Configure';

describe('Configure', () => {
  describe('constructor', () => {
    it('should set command sting and description', () => {
      // Arrange
      const expected_command_string = AWS_CONFIGURE_COMMAND;
      const expected_command_description = AWS_CONFIGURE_DESCRIPTION;

      // Act
      const sut = new Configure();

      // Assert
      expect(sut.command).toEqual(expected_command_string);
      expect(sut.description).toEqual(expected_command_description);
    });
  });
});
