const empleados = [
    {
        id: 1,
        nombre: "Fernando"
    },
    {
        id: 2,
        nombre: "Linda"
    },
    {
        id: 3,
        nombre: "Karen"
    }
];
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

const getEmpleado = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id);
        (empleado) ?
            resolve(empleado) : reject(`No existe el empleado con id ${id}`);
    });
    return promesa;
}

const getSalario = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id);
        (salario) ?
            resolve(salario) : reject(`El empleado con id ${id} no posee registro de salario`);
    });
    return promesa;
}

const id = 4;
/*
getEmpleado(id)
    .then(empleado => getSalario(empleado.id))
    .then(salario => console.log(salario.salario))
    .catch(error => console.log(error)); */

const getInfoUsuario = async (id) => {

    try{
        const empleado = await getEmpleado(id);
        try{
            const salario = await getSalario(empleado.id);
            console.log(empleado.nombre);
            console.log(salario.salario);
        }catch(error){
            console.log(error);
        }
    }catch(error){
        console.log(error)
    }
    
    
    
    
}
getInfoUsuario(id);