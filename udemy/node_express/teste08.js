console.log(process.argv);


temParam = (param) => process.argv.indexOf(param) !== -1


// (temParam('--producao')) ? console.log('Atenção total') : console.log('Tranquilo');
if (temParam('--producao')) {
    console.log('Atenção total')
} else {
    console.log('Tranquilo')
}
