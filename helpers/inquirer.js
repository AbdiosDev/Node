const inquirer=require ('inquirer');
require('colors');

//envio de informacion automatica
const preguntas = [
    {
        type:'list',
        name:'opcion',
        message:'Que desea hacer?',
        choices:[
            {
                value:'1',
                name:`${'1.'.yellow} Crear Tarea`
            },
            {
                value:'2',
                name:`${'2.'.yellow} Listar Tarea`
            }
            ,
            {
                value:'3',
                name:`${'3.'.yellow} Listar Tareas Completadas`
            },
            {
                value:'4',
                name:`${'4.'.yellow} Listar Tareas Pendientes`
            },
            {
                value:'5',
                name:`${'5.'.yellow} Completar Tarea(s)`
            },
            {
                value:'6',
                name:`${'6.'.yellow} Borrar Tareas`
            },
            {
                value:'0',
                name:`${'0.'.yellow} Salir`
            }
        ]
    }
];

const inquirerMenu=async()=>{

        console.clear();
        console.log("=======================".green);
        console.log("Seleccione una Opcion".red);
        console.log("=======================\n".green);

        const {opcion} = await inquirer.prompt(preguntas);
        return opcion;
}

const pausa = async()=>{
    const question = [
        {
            type:'input',
            name:'enter',
            message:`Precione ${'enter'.green} para acontinuar`
        }
    ];
    console.log("\n");
    await inquirer.prompt(question);
}
const leerInput = async(message)=>{
    const question = [
        {
            type:'input', //valor de entrada
            name:'desc',
            message, //mensaje
            validate(value){
                if(value.length===0)
                    return "por favor ingresa un valor"
                return true;
            }

        }
    ];
    // aplicamos la desestructuracion
    const {desc}= await inquirer.prompt(question);
    return desc;
}
module.exports={
    inquirerMenu,
    pausa,
    leerInput
}