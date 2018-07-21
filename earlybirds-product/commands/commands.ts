import { argv } from 'yargs';
import { closeConnection } from "../src/external/db";

const commandName: string = argv.command;

//await can not be used in top level... Maybe one day...
(async () => {
  const command = await import(`./${commandName}`);
  await command.execute(argv);

  //close connection
  await closeConnection();

})();
