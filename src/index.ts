import { Command } from 'commander';
import { prepackCommand } from '@app/cli/commands';
import {
  CONSTS_PROGRAMME_DESCRIPTION,
  CONSTS_PROGRAMME_NAME,
} from '@app/config/consts';
import packageJson from '../package.json';

const program = new Command();
const { version } = packageJson;

program
  .name(CONSTS_PROGRAMME_NAME)
  .description(CONSTS_PROGRAMME_DESCRIPTION)
  .version(version);

program.addCommand(prepackCommand, { isDefault: true });
program.parse(process.argv);
