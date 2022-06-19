const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true, //campo obligatorio,
            describe : "It's the base of the table of multiplication."
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe :  "Displays the whole table of multiplication."
        },
        'h' : {
            alias : 'hasta',
            type : 'number',
            demandOption : true,
            describe : 'The number until we want to perform the multiplication'
        }

    })
    .check((argv, options) => {
        if (isNaN(argv.base) || isNaN(argv.hasta)) {
            throw new Error("You must enter a number");
        } else {
            return true;
        }
    })
    .argv;
module.exports = argv;