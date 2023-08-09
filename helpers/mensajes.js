require ('colors');

const mostrarMenu=()=>{
    return new Promise(resolve=>{

        console.clear();
        console.log("=======================".green);
        console.log("Seleccione una Opcion".red);
        console.log("=======================".green);
    
        console.log(`${'1.'.green} Crear Tareas`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar Tareas Completadas`);
        console.log(`${'4.'.green} Listar Tareas Pendientes`);
        console.log(`${'5.'.green} Completar Tarea(s)`);
        console.log(`${'6.'.green} Borrar Tareas`);
        console.log(`${'0.'.green} Salir`);
        
        //paquete propio de node
        const readline=require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
        
        readline.question('Selecione una Opcion: ', (opt)=>{
            readline.close();
            //esto nos permitira recibir kla informacion
            resolve(opt);
        })

    });
    
}

const pausa=()=>{
    return new Promise(resolve=>{

        const readline=require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
        readline.question(`\nPresione ${'Enter'.green} para continuar\n`,(opt)=>{
            readline.close();
            //esto resuelve la promesa
            resolve();
        })

    });
}
//para qque nuestra funcion sea mostrada
module.exports={
    mostrarMenu,
    pausa
}