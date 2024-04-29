const {readFileSync, writeFileSync, write} =require('fs')


const read = () => {
    const citas = JSON.parse(readFileSync('citas.json', 'utf8'))

    console.log('\n')
    console.log('************Leyendo citas**********')
    console.log(citas)
    console.log('************************************')
    console.log('\n')
    return citas;
}

const create = (args) =>{
const [nombre_animal, edad, tipo_animal, color_animal, enfermedad] = args
const citas = read();

const new_date = {
    nombre_animal,
    edad,
    tipo_animal,
    color_animal,
    enfermedad
}
citas.push(new_date)
writeFileSync('citas.json', JSON.stringify(citas))
    
    console.log('\n')
    console.log('************Registrando citas**********')
    console.log(new_date)
    console.log('************************************')
    console.log('\n')


}


// const remove = () =>{

//     return 'Remover archivo'

// }

// const update = () =>{

//     return 'Actualizar archivo'

// }
module.exports = {

read,
// remove,
// update,
create
}