import { ParseOptions, Command } from 'commander';

import Parser from './Parser';

class ParserImpl implements Parser {
  private static parser: Parser | null = null;

  private constructor() {
    return this;
  }

  public static getParser(): Parser {
    if (this.parser === null) {
      this.parser = new ParserImpl();
    }
    return this.parser;
  }

  initalize(program: Command): void {
    program
      .command('clone <source> [destination]')
      .description('clone a repository into a newly created directory')
      .action((source, destination) => {
        console.log(destination);
        console.log('clone command called');
      });
  }

  parse(argv?: string[] | undefined, options?: ParseOptions | undefined): void {
    throw new Error('Not implemented');
  }
}

export default ParserImpl;
