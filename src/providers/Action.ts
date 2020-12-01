import Subcommand from './Subcommand';

import ParserSingleton from '../ParserSingleton';

abstract class Action implements Subcommand {
  abstract command: string
  abstract description: string
  initialize(): void {
    ParserSingleton.getParser().commander
      .createCommand(this.command)
      .description(this.description)
      .action(this.action);
  }
  abstract action(...args: []): void
}

export default Action;
