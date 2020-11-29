import { CommandOptions, ParseOptions } from 'commander';

interface Commander {
  command(nameAndArgs: string, opts?: CommandOptions): ReturnType<this['createCommand']>;
  createCommand(name?: string): Commander;
  description(str: string, argsDescription?: {[argName: string]: string}): this;
  action(fn: (...args: any[]) => void | Promise<void>): this;
  parse(argv?: string[], options?: ParseOptions): this;
}

export default Commander;
