import { ParseOptions } from 'commander';

import Parser from './Parser';

class ParserImpl implements Parser {
  private static parser: Parser | null = null;

  public static getParser(): Parser {
    if (this.parser === null) {
      this.parser = new ParserImpl();
    }
    return this.parser;
  }

  private constructor() {
    this.deps = {
      program: null,
    };
    return this;
  }

  deps: Record<'program', any>;

  initalize(): void {
    this.deps.program
      .command('clone <source> [destination]')
      .description('clone a repository into a newly created directory')
      .action(this.parseVpnCommand);
  }

  parseVpnCommand(source: string, destination: string): void {
    console.log(destination);
    console.log('clone command called');
  }

  parse(argv?: string[] | undefined, options?: ParseOptions | undefined): void {
    this.deps.program.parse(argv, options);
  }
}

export default ParserImpl;
