import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import TYPES from '../../types';
import Action from '../Action';

import Subcommand from '../Subcommand';

export const AWS_PROVIDER_COMMAND = 'aws';
export const AWS_PROVIDER_DESCRIPTION = 'a module that provides support for AWS provider';

@injectable()
class Aws implements Subcommand {
  private check: Action | null
  private configure: Action | null
  private login: Action | null
  
  command = AWS_PROVIDER_COMMAND;
  description = AWS_PROVIDER_DESCRIPTION;

  constructor(
    @inject(TYPES.Check) check: Action | null,
    @inject(TYPES.Configure) configure: Action | null,
    @inject(TYPES.Login) login: Action | null,
  ) {
    this.check = check;
    this.configure = configure;
    this.login = login;
  }

  initialize(): void {
    this.check?.initialize();
    this.configure?.initialize();
    this.login?.initialize();
  }
};

export default Aws;
