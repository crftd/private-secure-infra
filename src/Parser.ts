import { ParseOptions } from 'commander';

interface Parser {
  initalize(): void
  parse(argv?: string[] | undefined, options?: ParseOptions | undefined): void
  parseVpnCommand(source: string, destination: string): void
}

export default Parser;
