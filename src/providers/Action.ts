import Subcommand from './Subcommand';

interface Action extends Subcommand {
  action(...args: []): void
}

export default Action;
