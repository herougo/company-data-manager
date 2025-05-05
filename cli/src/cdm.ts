import { program } from 'commander';
import { toTsvAction, validateAction } from './actions';

const main = () => {
    program
        .command('validate')
        .argument('<source>', 'source json file')
        .action(validateAction);
    
    program
        .command('to-tsv')
        .argument('<source>', 'source json file')
        .argument('<destination>', 'destination of output tsv file')
        .action(toTsvAction);

    program.parse();
}

main();