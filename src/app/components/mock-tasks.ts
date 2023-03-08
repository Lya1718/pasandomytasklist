
// El mock es una función que reemplaza e imita un objeto o función real que opera dentro del programa. El propósito de esto es que, al probar el programa, se utilice el mock en vez del objeto real.
// necesiramos una forma de guardar lainformación de las tareas que estamos creando y guardando que despues editaremos y guardaremos

import {Task} from "./Task"
// se define TASKS como un array de Task (Task[])
export const TASKS: Task[] = [
    {
        id: 1,
        text: "Terminar el primer módulo de Angular",
        day: "Octubre 31 a las 12:00",
        reminder: true
    },
    {
        id: 2,
        text: "Hacer la lista de cosas para llevar a Perú",
        day: "Octubre 30 a las 21:00",
        reminder: true
    },
    {
        id: 3,
        text: "Calentar mi matecocido para la merienda",
        day: "Octubre 30 a las 17:00",
        reminder: false
    },
    {
        id: 4,
        text: "Limpiar mi habitación",
        day: "Octubre 31 a las 10:30",
        reminder: false
    }
]