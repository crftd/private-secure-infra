import { injectable } from 'inversify';
import 'reflect-metadata';

import Action from '../Action';

export const AWS_CHECK_COMMAND = 'check';
export const AWS_CHECK_DESCRIPTION = 'prints out masked AWS credentials and current active configuration (if exist)';

@injectable()
class Check extends Action {
  command = AWS_CHECK_COMMAND;
  description = AWS_CHECK_DESCRIPTION;
  action(): void {
    throw new Error('Not implemented');
  }
}

export default Check;
