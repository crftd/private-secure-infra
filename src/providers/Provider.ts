import Subcommand from './Subcommand';

interface Provider extends Subcommand {
  printCredentials(): void
  login(id: string, secret: string): void
  configure(region: string, output: string): void
}

export default Provider;
