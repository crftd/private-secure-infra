import ParserImpl from './ParserImpl';

const parser = ParserImpl.getParser();

parser.initalize();

parser.parse(process.argv);

