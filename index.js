const operaciones = require('./operaciones')

const agruments = process.argv.slice(2)
const [funcion, ...args] = agruments

switch(funcion){

    case 'read':
        operaciones.read()
        // console.log("Leyendo archivo")
        break;
           
    case 'create':
        operaciones.create(args)
        // const [nombre_animal, edad, tipo_animal, color_animal, enfermedad] = args
        // console.log(args)
        break;
    
     default:
        console.log('No se pasó una función correcta')
    break;

    // case 'remove':
    //     operaciones.remove()
    //     console.log("Borrando archivo")
    //     break;
    
    // case 'update':
    //     operaciones.update()
    //     console.log("Actualizando archivo")
    //     break;
}