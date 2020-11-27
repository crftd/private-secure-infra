import { ParseOptions } from 'commander';
import Leecher from './Leecher';

interface Parser extends Leecher {
  initalize(): void
  parse(argv?: string[] | undefined, options?: ParseOptions | undefined): void
  parseVpnCommand(source: string, destination: string): void
}

export default Parser;
