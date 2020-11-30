import Provider from './Provider';

export const AWS_PROVIDER_COMMAND = 'aws';
export const AWS_PROVIDER_DESCRIPTION = 'a module that provides support for AWS provider';

class Aws implements Provider {
  command = AWS_PROVIDER_COMMAND;
  descrition = AWS_PROVIDER_DESCRIPTION;
  action(...args: []): void {
    throw new Error('Not implemented');
  }
  initialize(): void {
    throw new Error('Not implemented');
  }
  printCredentials(): void {
    throw new Error('Not implemented');
  }
  login(id: string, secret: string): void {
    throw new Error('Not implemented');
  }
  configure(region: string, output: string): void {
    throw new Error('Not implemented');
  }
};

export default Aws;
