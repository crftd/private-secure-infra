import { Container } from 'inversify';
import TYPES from './types';

import Commander from './services/Commander';
import CommanderWrapper from './services/CommanderWrapper';

import Action from './providers/Action';
import Check from './providers/aws/Check';
import Configure from './providers/aws/Check';
import Login from './providers/aws/Check';

import Subcommand from './providers/Subcommand';
import Aws from './providers/aws/Aws';

const container = new Container();

container.bind<Commander>(TYPES.Commander).to(CommanderWrapper);

container.bind<Action>(TYPES.Action).to(Check);
container.bind<Action>(TYPES.Action).to(Configure);
container.bind<Action>(TYPES.Action).to(Login);

container.bind<Subcommand>(TYPES.Subcommand).to(Aws);

export default container;
