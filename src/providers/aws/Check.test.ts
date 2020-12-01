import { createMock } from 'ts-auto-mock';

import Check, { AWS_CHECK_COMMAND, AWS_CHECK_DESCRIPTION } from './Check';

import Parser from '../../Parser';
import ParserSingleton from '../../ParserSingleton';

jest.mock('../../ParserSingleton');

describe('Check', () => {
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
      const expected_command_string = AWS_CHECK_COMMAND;
      const expected_command_description = AWS_CHECK_DESCRIPTION;

      // Act
      const sut = new Check();

      // Assert
      expect(sut.command).toEqual(expected_command_string);
      expect(sut.description).toEqual(expected_command_description);
    });
  });

  describe('initialize', () => {
    it('should add a command to en existing Commander instance', () => {
      // Arrange
      const sut = new Check();

      // Act
      sut.initialize();

      // Assert
      expect(mock_parser.commander.createCommand).toHaveBeenCalledWith(sut.command);
      expect(mock_parser.commander.description).toHaveBeenCalledWith(sut.description);
      expect(mock_parser.commander.action).toHaveBeenCalledWith(sut.action);
    });
  });
});
