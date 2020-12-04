import { injectable, inject } from 'inversify';
import 'reflect-metadata';

import TYPES from '../types';

import ProvidersLoader from './ProvidersLoader';
import Subcommand from './Subcommand';

@injectable()
class ProvidersLoaderImpl implements ProvidersLoader {
  private aws: Subcommand

  constructor(
    @inject(TYPES.Subcommand) aws: Subcommand
  ) {
    this.aws = aws;
  }
  initializeProviders(): void {
    this.aws.initialize();
  }
}

export default ProvidersLoaderImpl;
