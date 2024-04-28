const operaciones = require('./operaciones')

const agruments = process.argv.slice(2)
const [funcion, ...args] = agruments

switch(funcion){

    case 'read':
        operaciones.read()
        break;
        


}