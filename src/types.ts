const TYPES = {
  Commander: Symbol.for('Commander'),
  Action: Symbol.for('Action'),
  Check: Symbol.for('Check'),
  Configure: Symbol.for('Configure'),
  Login: Symbol.for('Login'),
  Parser: Symbol.for('Parser'),
  Subcommand: Symbol.for('Subcommand'),
};

Object.freeze(TYPES);

export default TYPES;
