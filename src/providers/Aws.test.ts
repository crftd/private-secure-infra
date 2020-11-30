import Aws, { AWS_PROVIDER_COMMAND, AWS_PROVIDER_DESCRIPTION } from './Aws';

describe('AWS plugin', () => {
  describe('constructor', () => {
    it('should set command sting and description', () => {
      // Arrange
      const expected_command_string = AWS_PROVIDER_COMMAND;
      const expected_command_descrition = AWS_PROVIDER_DESCRIPTION;

      // Act
      const aws = new Aws();

      // Assert
      expect(aws.command).toEqual(expected_command_string);
      expect(aws.descrition).toEqual(expected_command_descrition);
    });
  });
});
