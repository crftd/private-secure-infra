import { ParseOptions } from 'commander';

interface Parser {
  initialize(): void
  parse(argv?: string[] | undefined, options?: ParseOptions | undefined): void
  parseVpnCommand(source: string, destination: string): void
}

export default Parser;
