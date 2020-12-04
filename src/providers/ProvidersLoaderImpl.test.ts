import { createMock } from 'ts-auto-mock';

import ProvidersLoaderImpl from './ProvidersLoaderImpl';
import Subcommand from './Subcommand';

describe('ProvidersLoaderImpl', () => {
  const mock_aws = createMock<Subcommand>();

  describe('initializeProviders', () => {
    it('should call all providers initialize methods', () => {
      // Arrange
      const sut = new ProvidersLoaderImpl(mock_aws);

      // Act
      sut.initializeProviders();

      // Assert
      expect(mock_aws.initialize).toHaveBeenCalled();
    });
  });
});
