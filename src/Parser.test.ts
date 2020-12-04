import { createMock } from 'ts-auto-mock';

import Commander from './services/Commander';
import Parser from './Parser';
import ParserSingleton from './ParserSingleton';
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
        const actualParser: Parser = ParserSingleton.getParser();
        // Assert
        expect(actualParser).not.toBeUndefined();
        // expect(actualParser.commander).not.toBeUndefined();
      });

      it('should return same instance if called twice', () => {
        // Arrange
        const expectedParser: Parser = ParserSingleton.getParser();
        // Act
        const actualParser: Parser = ParserSingleton.getParser();
        // Assert
        expect(actualParser).not.toBeUndefined();
        expect(actualParser).toBe(expectedParser);
      });
    });
  });
});
