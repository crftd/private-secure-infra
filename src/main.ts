import ParserSingleton from './ParserSingleton';

const parser = ParserSingleton.getParser();

parser.initialize();

parser.parse(process.argv);

