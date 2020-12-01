import { injectable } from 'inversify';
import 'reflect-metadata';

import Action from '../Action';

export const AWS_CONFIGURE_COMMAND = 'configure';
export const AWS_CONFIGURE_DESCRIPTION = 'sets AWS CLI options';

@injectable()
class Configure extends Action {
  command = AWS_CONFIGURE_COMMAND;
  description = AWS_CONFIGURE_DESCRIPTION;
  action(): void {
    throw new Error('Not implemented');
  }
}

export default Configure;
