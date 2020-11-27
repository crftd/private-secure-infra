import Aws from './Aws';

describe('AWS plugin', () => {
  describe('constructor', () => {
    it('should set command sting and description', () => {
      // Arrange
      const expected_command_string = 'aws';
      const expected_command_descrition = 'a module that provides support for AWS provider';

      // Act
      const aws = new Aws();

      // Assert
      expect(aws.command).toEqual(expected_command_string);
      expect(aws.descrition).toEqual(expected_command_descrition);
    });
  });
});
