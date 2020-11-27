import { Command as MockCommand, CommandConstructor } from 'commander';
import { createMock } from 'ts-auto-mock';

import Parser from './Parser';
import ParserImpl from './ParserImpl';

jest.mock('commander');

describe('Parser', () => {
  describe('singleton', () => {
    describe('getParser', () => {
      it('should return a Parser instance', () => {
        // Arrange
        // Act
        const actualParser: Parser = ParserImpl.getParser();
        // Assert
        expect(actualParser).not.toBeUndefined();
        expect(actualParser.deps).not.toBeUndefined();
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

      const mockCommand = new MockCommand() as MockCommand;
      const MockCreateCommand = createMock<CommandConstructor>();

      const mockCreateCommand = new MockCreateCommand();
      mockCreateCommand.description = jest.fn().mockReturnValue(mockCreateCommand);

      mockCommand.command = jest.fn().mockReturnValue(mockCreateCommand);

      const parser: Parser = ParserImpl.getParser();

      parser.deps.program = mockCommand;

      // Act
      parser.initalize();

      // Assert
      expect(mockCommand.command).toHaveBeenCalledWith(expected_command_description);
      expect(mockCreateCommand.description).toHaveBeenCalledWith(expected_descrition);
      expect(mockCreateCommand.action).toHaveBeenCalledWith(parser.parseVpnCommand);
    });
  });
});
