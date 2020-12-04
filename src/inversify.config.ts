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

import ProvidersLoader from './providers/ProvidersLoader';
import ProvidersLoaderImpl from './providers/ProvidersLoaderImpl';

const container = new Container();

container.bind<Commander>(TYPES.Commander).to(CommanderWrapper);

container.bind<Action>(TYPES.Check).to(Check);
container.bind<Action>(TYPES.Configure).to(Configure);
container.bind<Action>(TYPES.Login).to(Login);

container.bind<Subcommand>(TYPES.Subcommand).to(Aws);

container.bind<ProvidersLoader>(TYPES.ProvidersLoader).to(ProvidersLoaderImpl);


export default container;
