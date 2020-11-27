import { Command } from 'commander';
import ParserImpl from './ParserImpl';

const program = new Command() as Command;
const parser = ParserImpl.getParser();

parser.deps.set('program', program);

parser.initalize();

parser.parse(process.argv);

