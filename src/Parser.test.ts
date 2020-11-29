import { createMock } from 'ts-auto-mock';

import Commander from './services/Commander';
import Parser from './Parser';
import ParserImpl from './ParserImpl';
import mockContainer from './inversify.config';

jest.mock('commander');
jest.mock('./inversify.config');

describe('Parser', () => {
  const mockCommander = createMock<Commander>();

  beforeAll(() => {
    (mockCommander.command as jest.Mock).mockReturnValue(mockCommander);
    (mockCommander.description as jest.Mock).mockReturnValue(mockCommander);
    (mockCommander.action as jest.Mock).mockReturnValue(mockCommander);
    (mockContainer.get as jest.Mock).mockReturnValue(mockCommander);
  });

  describe('singleton', () => {
    describe('getParser', () => {
      it('should return a Parser instance', () => {
        // Arrange
        // Act
        const actualParser: Parser = ParserImpl.getParser();
        // Assert
        expect(actualParser).not.toBeUndefined();
        // expect(actualParser.commander).not.toBeUndefined();
      });

      it('should return same instance if called twice', () => {
        // Arrange
        const expectedParser: Parser = ParserImpl.getParser();
        // Act
        const actualParser: Parser = ParserImpl.getParser();
        // Assert
        expect(actualParser).not.toBeUndefined();
        expect(actualParser).toBe(expectedParser);
      });
    });
  });

  describe('initalise', () => {
    it('should call builder methods', () => {
      // Arrange
      const expected_command_description = 'aws';
      const expected_descrition = 'a module that provides support for AWS provider';

      const parser: Parser = ParserImpl.getParser();

      // Act
      parser.initalize();

      // Assert
      expect(mockCommander.command).toHaveBeenCalledWith(expected_command_description);
      expect(mockCommander.description).toHaveBeenCalledWith(expected_descrition);
      expect(mockCommander.action).toHaveBeenCalledWith(parser.parseVpnCommand);
    });
  });
});
