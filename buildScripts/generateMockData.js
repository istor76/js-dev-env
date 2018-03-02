/* 
  This script genetates mock data for local development.
  This way we don't have to point to an actual API,
  but we can enjoy:
    - realistic and randomized data
    - rapid page loads due to local  and static data
*/

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, err => {
  if(err){ 
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
