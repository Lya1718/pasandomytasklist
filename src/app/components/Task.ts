// acá vamos a manejar la base de datos, se va a crear una interface
// un objeto puede entender múltiples mensajes; a este conjunto de mensajes que podemos enviarle lo denominamos interfaz
export interface Task {
    id?: number, //el "?" significa que es opcional, podría no venir
    text: string ;
    day: string;
    reminder: boolean;
}