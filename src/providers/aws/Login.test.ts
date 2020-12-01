import { createMock } from 'ts-auto-mock';

import Login, { AWS_LOGIN_COMMAND, AWS_LOGIN_DESCRIPTION } from './Login';

import Parser from '../../Parser';
import ParserSingleton from '../../ParserSingleton';

jest.mock('../../ParserSingleton');

describe('Login', () => {
  const mock_parser = createMock<Parser>();

  beforeAll(() => {
    (ParserSingleton.getParser as jest.Mock).mockReturnValue(mock_parser);
    (mock_parser.commander.createCommand as jest.Mock).mockReturnValue(mock_parser.commander);
    (mock_parser.commander.description as jest.Mock).mockReturnValue(mock_parser.commander);
    (mock_parser.commander.action as jest.Mock).mockReturnValue(mock_parser.commander);
  });

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

  describe('initialize', () => {
    it('should add a command to en existing Commander instance', () => {
      // Arrange
      const sut = new Login();

      // Act
      sut.initialize();

      // Assert
      expect(mock_parser.commander.createCommand).toHaveBeenCalledWith(sut.command);
      expect(mock_parser.commander.description).toHaveBeenCalledWith(sut.description);
      expect(mock_parser.commander.action).toHaveBeenCalledWith(sut.action);
    });
  });
});
