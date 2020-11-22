import { ParseOptions, Command } from 'commander';

interface Parser {
  initalize(program: Command): void
  parse(argv?: string[] | undefined, options?: ParseOptions | undefined): void
}

export default Parser;
