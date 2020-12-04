import { createMock } from 'ts-auto-mock';

import Action from '../Action';

import Aws, { AWS_PROVIDER_COMMAND, AWS_PROVIDER_DESCRIPTION } from './Aws';
import Check from './Check';

describe('AWS plugin', () => {
  const mockCheck = createMock<Check>();
  const mockLogin = createMock<Action>();
  // const mockConfigure = createMock<Action>();

  describe('constructor', () => {
    it('should set command sting and description', () => {
      // Arrange
      const expected_command_string = AWS_PROVIDER_COMMAND;
      const expected_command_description = AWS_PROVIDER_DESCRIPTION;

      // Act
      const sut = new Aws(mockCheck, mockLogin, null);

      // Assert
      expect(sut.command).toEqual(expected_command_string);
      expect(sut.description).toEqual(expected_command_description);
    });
  });
  describe('initialize', () => {
    it('should pass initialize call to it\'s children', () => {
      // Arrange
      const sut = new Aws(mockCheck, mockLogin, null);

      // Act
      sut.initialize();

      // Assert
      expect(mockCheck.initialize).toHaveBeenCalled();
      expect(mockLogin.initialize).toHaveBeenCalled();
      // expect(mockConfigure.initialize).toHaveBeenCalled();
    });
  });
});
