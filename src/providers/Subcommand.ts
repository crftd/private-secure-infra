interface Subcommand {
  command: string
  description: string
  initialize(): void
}

export default Subcommand;
