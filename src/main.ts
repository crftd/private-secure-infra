import container from './inversify.config';
import TYPES from './types';

import ParserSingleton from './ParserSingleton';
import ProvidersLoader from './providers/ProvidersLoader';

const providerLoader = container.get<ProvidersLoader>(TYPES.ProvidersLoader);

providerLoader.initializeProviders();

const parser = ParserSingleton.getParser();

parser.parse(process.argv);

