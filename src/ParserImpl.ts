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
      .command('aws')
      .description('a module that provides support for AWS provider')
      .action(this.parseVpnCommand);
  }

  parseVpnCommand(): void {
    console.log('aws command called');
  }

  parse(argv?: string[] | undefined, options?: ParseOptions | undefined): void {
    this.deps.program.parse(argv, options);
  }
}

export default ParserImpl;
