import { ParseOptions } from 'commander';

import Commander from './services/Commander';

interface Parser {
  commander: Commander
  initialize(): void
  parse(argv?: string[] | undefined, options?: ParseOptions | undefined): void
  parseVpnCommand(source: string, destination: string): void
}

export default Parser;
