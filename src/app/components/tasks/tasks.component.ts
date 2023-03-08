import { Component, OnInit } from '@angular/core';
// es importante importar el observable y el of
// importar la lista de tareas y la interfaz
// ya no vamos a usar el mock, lo vamos a usar directamente desde el servicio
import { TaskService } from 'src/app/service/task.service';
import { Task } from '../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
// inicializar la lista de tareas TASKS como un array de tareas tasks y lo traemos desde nuestro archivo mock
// Como son las clases las que usan las interfaces, éstas usan la palabra reservada
// “implements” para decirle a una clase que implemente una interfaz.
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

// tenemos que crear un constructor y tenemos que declarar el servicio
// y tambien una variable del mismo tipo del observable en donde vamos
// a guardar todo lo que se nos retorna de la base de datos tasks: Task[];

  constructor(
    private service: TaskService
  ) { }

  ngOnInit(): void {
    // tenemos que decirle al servicio que nos traiga todas las tareas (con la
    // función) y luego nos subscribimos, una vez lo hacemos ya podemos
    // actuar sobre ese elemento, lo que está dentro de los paréntesis antes del =>
    // es lo que se retorna

    this.service.getTasks().subscribe((tasks) => (
      this.tasks = tasks
    ));
  }
//vamos a buscar el emulador de la base de datos json server
// una vez instalado el server, vamos a llamar al método
// tenemos que pasar el parametro watch y decir qué queremos que mire db.json y el puerto
// en donde vamos a guardar los datos
// y luego corremos el comando con run
// ahora tenemos una "base de datos"

deleteTask(task: Task){
  this.service.deleteTask(task)
  .subscribe(
    () => (
      this.tasks = this.tasks.filter( (t) => {
        return t.id !== task.id
      })
    ))
  };

  //esta tarea que vamos a recibir se la tenemos que pasar a nuestra base de datos
  //para que sea borrada a través del servicio, entonces vamos al servicio y hacemos
  //una función
  //para que la lista que se muestre en pantalla aparezca sin el elemento borrado, hacemos
  //un filter para que no aparezca ese elemento, la t representa tasks
  //es importante poner lo que se devuelve del subscribe, sino no funciona el código
  //va a quedar como que no retornó nada

  //una cosa es borrar de la base de datos y otra de la pantalla

  toggleReminder(task: Task){
    task.reminder = !task.reminder
    this.service.updateTaskReminder(task).subscribe();
  }

  // Un objeto se define utilizando corchetes {} . Las propiedades se separan con coma ( , ) 
  // y las llaves y valores se separan con dos puntos ( : )

  addTask(task: Task){
    this.service.addTask(task).subscribe((task) => 
    this.tasks.push(task))
  }

  // que nos devuelva la tarea recien creada, la tarea se crea en un formulario
  // pero la lista de tareas la estoy manejando a través de un componente
  // así que la tengo que agregar en el array de tareas, la tarea que recién
  // está insertada en la base de datos
}
