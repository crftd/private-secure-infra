import { injectable } from 'inversify';
import 'reflect-metadata';

import Action from '../Action';

export const AWS_CHECK_COMMAND = 'check';
export const AWS_CHECK_DESCRIPTION = 'prints out masked AWS credentials and current active configuration (if exist)';

@injectable()
class Check implements Action {
  command = AWS_CHECK_COMMAND;
  description = AWS_CHECK_DESCRIPTION;
  initialize(): void {
    throw new Error('Not implemented');
  }
  action(): void {
    throw new Error('Not implemented');
  }
}

export default Check;
