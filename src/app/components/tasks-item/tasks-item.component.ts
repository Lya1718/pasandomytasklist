//agregar output y eventemitter para extraer la función hacia afuera para que lo
//maneje la lista de tareas y no tasks-item
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
// agregar icons fortawesome fonts angular, el nombre del icon
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
// inicializamos la variable task con la primera tarea, por eso el 0
export class TasksItemComponent implements OnInit {
  @Input() task: Task = TASKS[0]
  //Se llama instancia a todo objeto que derive de algún otro. De esta forma, todos los 
  //objetos son instancias de algún otro, menos la clase Object que es la madre de todas
  
  //output es para extraer cosas del componente, llamamos la función que será
  //tipo EventEmitter (evento personalizado) con una instancia del tipo task, declaramos
  //que es un nuevo eventemitter, y en la función llamamos this.función.emit()
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  // llamamos al icon que queremos usar
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }
// tenemos que aclarar task tipo Task porque sino, nos va a borrar todas las tareas
// con emit mandamos el evento personalizado al elemento padre, al template, se usa
// ya como evento, y de ahí tenemos que hacer que se ejecute otra función 
  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }


  // Void: se usa para declarar funciones que no retornan nada.
}
