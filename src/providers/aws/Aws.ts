import { inject } from 'inversify';
import 'reflect-metadata';
import TYPES from '../../types';
import Action from '../Action';

import Subcommand from '../Subcommand';

export const AWS_PROVIDER_COMMAND = 'aws';
export const AWS_PROVIDER_DESCRIPTION = 'a module that provides support for AWS provider';

class Aws implements Subcommand {
  private check: Action
  private configure: Action
  private login: Action
  
  command = AWS_PROVIDER_COMMAND;
  description = AWS_PROVIDER_DESCRIPTION;

  constructor(
    @inject(TYPES.Action) check: Action,
    @inject(TYPES.Action) configure: Action,
    @inject(TYPES.Action) login: Action,
  ) {
    this.check = check;
    this.configure = configure;
    this.login = login;
  }

  initialize(): void {
    this.check.initialize();
    this.configure.initialize();
    this.login.initialize();
  }
};

export default Aws;
