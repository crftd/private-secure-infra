import { injectable } from 'inversify';
import 'reflect-metadata';

import { Command, CommandOptions, ParseOptions } from 'commander';

import Commander from './Commander';

@injectable()
class CommanderWrapper implements Commander {
  program: Command;
  constructor() {
    this.program = new Command() as Command;
  }
  command(nameAndArgs: string, opts?: CommandOptions): ReturnType<this['createCommand']> {
    return this.program.command(nameAndArgs, opts);
  }
  createCommand(name?: string): Commander {
    return this.program.createCommand(name);
  }
  description(str: string, argsDescription?: {[argName: string]: string}) {
    this.program.description(str, argsDescription);
    return this;
  }
  action(fn: (...args: any[]) => void | Promise<void>): this {
    this.program.action(fn);
    return this;
  }
  parse(argv?: string[], options?: ParseOptions): this {
    this.program.parse(argv, options);
    return this;
  }
}

export default CommanderWrapper;
