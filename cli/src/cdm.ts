import { program } from 'commander';
import { aggregateAction, toTsvAction, validateAction } from './actions';

const main = () => {
    program
        .command('validate')
        .argument('<source>', 'source json file')
        .action(validateAction);

    program
        .command('aggregate')
        .argument('<source>', 'source folder of json files')
        .argument('<destination>', 'destination of output json file')
        .action(aggregateAction);
    
    program
        .command('to-tsv')
        .argument('<source>', 'source json file')
        .argument('<destination>', 'destination of output tsv file')
        .action(toTsvAction);

    program.parse();
}

main();