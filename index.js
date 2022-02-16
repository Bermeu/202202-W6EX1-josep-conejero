//const { a, b } = require("./numbers");

const configuration = require("dotenv").config();
const chalk = require("chalk");
const { program } = require("commander");
const debug = require("debug")("josepfentsumes");

program.option("-a <number>");
program.option("-b <number>");
program.parse();
const cliOptions = program.opts();

const suma = +cliOptions.a + +cliOptions.b;
const resta = +cliOptions.a - +cliOptions.b;
const multiplicacion = +cliOptions.a * +cliOptions.b;
const division = +cliOptions.a / +cliOptions.b;

debug(chalk.red("Resultados:"));
debug(chalk.yellow(`${cliOptions.a} + ${cliOptions.b} = ${suma}`));
debug(chalk.blue(`${cliOptions.a} - ${cliOptions.b} = ${resta}`));
debug(chalk.magenta(`${cliOptions.a} * ${cliOptions.b} = ${multiplicacion}`));
debug(chalk.green(`${cliOptions.a} / ${cliOptions.b} = ${division}`));
