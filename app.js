require ('colors');
console.clear();

const { guardarBD, leerDB } = require('./helpers/guardarArchivo.js');
//importacion de nuestros pauetes
// const{mostrarMenu, pausa}=require('./helpers/mensajes.js');
const{inquirerMenu, pausa, leerInput}=require('./helpers/inquirer.js')
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');

//async funcion asincrona
const main = async()=>{
    let opt="";
    const tareas = new Tareas();
    // const tareasDB = leerDB();
    do {
        //await = esperamos que nos mande algo
        opt = await inquirerMenu();
        switch(opt){
            case '1':
                // crear opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);//esto nos permite adicionar tarea
            break;
            case '2':
                console.log(tareas.listadoArr);
            break;
            case '3':

            break;
        }
        await pausa();
        guardarBD(tareas.listadoArr); //nosostros guardamos en todo momento

    } while (opt!=='0');

    //  pausa();
}

main();
