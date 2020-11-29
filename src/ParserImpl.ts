import { ParseOptions } from 'commander';

import container from './inversify.config';
import TYPES from './types';

import Parser from './Parser';
import Commander from './services/Commander';

class ParserImpl implements Parser {
  private static parser: Parser | null = null;

  public static getParser(): Parser {
    if (this.parser === null) {
      this.parser = new ParserImpl();
    }
    return this.parser;
  }

  private constructor() {
    this.commander = container.get<Commander>(TYPES.Commander);
  }

  commander: Commander

  initalize(): void {
    this.commander
      .command('aws')
      .description('a module that provides support for AWS provider')
      .action(this.parseVpnCommand);
  }

  parseVpnCommand(): void {
    console.log('aws command called');
  }

  parse(argv?: string[] | undefined, options?: ParseOptions | undefined): void {
    this.commander.parse(argv, options);
  }
}

export default ParserImpl;
