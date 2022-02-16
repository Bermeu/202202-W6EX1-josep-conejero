//const { a, b } = require("./numbers");

const configuration = require("dotenv").config();
const chalk = require("chalk");
const { program } = require("commander");
const debug = require("debug")("josepfentsumes");
const prompt = require("prompt");

program.option("-a <number>");
program.option("-b <number>");
program.parse();
const cliOptions = program.opts();
let numero1 = 0;
let numero2 = 0;

if (Number.isNaN(+cliOptions.a) && Number.isNaN(+cliOptions.b)) {
  (async () => {
    const { a: numero1, b: numero2 } = await prompt.get([
      "number 1",
      "number 2",
    ]);
  })();
  debug("numero 1", numero1);
} else {
  if (Number.isNaN(+cliOptions.a) || Number.isNaN(+cliOptions.b)) {
    debug("ERROR: ALGUNO DE LOS DOS DATOS NO ES UN NÚMERO");
    process.exit(1);
  }
}

const suma = +cliOptions.a + +cliOptions.b;
const resta = +cliOptions.a - +cliOptions.b;
const multiplicacion = +cliOptions.a * +cliOptions.b;
const division = +cliOptions.a / +cliOptions.b;

debug(chalk.red("Resultados:"));
debug(chalk.yellow(`${cliOptions.a} + ${cliOptions.b} = ${suma}`));
debug(chalk.blue(`${cliOptions.a} - ${cliOptions.b} = ${resta}`));
debug(chalk.magenta(`${cliOptions.a} * ${cliOptions.b} = ${multiplicacion}`));
debug(chalk.green(`${cliOptions.a} / ${cliOptions.b} = ${division}`));
