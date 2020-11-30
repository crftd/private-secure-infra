import { injectable } from 'inversify';
import 'reflect-metadata';

import Action from '../Action';

export const AWS_LOGIN_COMMAND = 'login';
export const AWS_LOGIN_DESCRIPTION = 'log in to AWS';

@injectable()
class Login implements Action {
  command = AWS_LOGIN_COMMAND;
  description = AWS_LOGIN_DESCRIPTION;
  initialize(): void {
    throw new Error('Not implemented');
  }
  action(): void {
    throw new Error('Not implemented');
  }
}

export default Login;
