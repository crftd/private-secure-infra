import { Container } from 'inversify';
import TYPES from './types';

import Commander from './services/Commander';
import CommanerWrapper from './services/CommanderWrapper';


const container = new Container();

container.bind<Commander>(TYPES.Commander).to(CommanerWrapper);

export default container;
