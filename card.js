#!/usr/bin/env node
'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

// clear the terminal before showing the npx card
clear()
const prompt = inquirer.createPromptModule();
const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                // Use chalk to style headers
                name: `Toss an ${chalk.bold("email")}?`,
                value: () => {
                    open("evrard.sibomana@gmail.com");
                    console.log("\nLooking forward to hearing your message and replying to you!\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Good bye, have a nice day!\n");
                }
            }
        ]
    }
];
const data = {
    name: chalk.bold.blue("Evard Sibomana"),
    handle: chalk.white("@evrardsibo"),
    fact: chalk.hex('#B10000')('I love coding!'),
    twitter: chalk.hex('#00A1D9')("https://twitter.com/evrardsibo8723"),
    github: chalk.hex('#787878')("https://github.com/evrardsibo"),
    linkedin: chalk.hex('#A52A2A')("https://www.linkedin.com/in/evrard-sibomana-juniordeveloper/"),
    mycv: chalk.hex('#008B8B')("https://evrardsibo.github.io/My-CV/"),
    website: chalk.hex('#00AB9E')("https://becode.org/"),
    npx: chalk.hex('#A1AB00')("npx evrard"),

    labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
    labelTwitter: chalk.hex('#629DFF').bold("        Twitter:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelLinkedin: chalk.hex('#A959FF').bold("           Linkedin:"),
    labelMycv: chalk.hex('#4169E1').bold("       Mycv:"),
    labelWebsite: chalk.hex('#59FFC8').bold("        Website:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedin}  ${data.linkedin}`,
        `${data.labelMycv}  ${data.mycv}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Evrard, I'm a passionate web " 
        )}`,
        `${chalk.bold("developer from Burundi, and have a ")}`,
        `${chalk.bold(
            "hobby for coding, php,Mysql,laravel and "
        )}`,
        `${chalk.bold(
            "git. Toss me an email if you want to collab!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue",
    }
);

// Show the boxen
console.log(me);
prompt(questions).then(answer => answer.action());
