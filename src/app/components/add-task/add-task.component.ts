import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//importamos el servicio y el subscription
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
//importamos la interfaz
import { Task } from '../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  //exportamos el evento
@Output() onAddTask: EventEmitter<Task> = new EventEmitter();
text: string = "";
day: string = "";
reminder: boolean = false;
// vamos a recibir desde el componente un texto, un día y un reminder, tenemos que declarar
// como variables vacías
showAddTask: boolean = false;
subscription?: Subscription;

  constructor(
    private uiService: UiService
  ) { 

    //en el constructor vamos a hacer que esta subscripción nos llame
    //a la función declarada en ui service, nos subscribimos y pedimos
    //que nos retorne como valor, showAddTask, le pasamos primero el valor que
    //se recibe
    this.subscription = this.uiService.onToggle()
    .subscribe(value => this.showAddTask = value)
    
    //vamos a traer subscription también acá para escuchar el cambio
    //de esta variable. Nosotros estamos escuchando cuando cambia una varable
    //en un componente y podemos escuchar igualmente en otros
    //componentes
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length == 0){
      alert("Please add a task");
      return
    }
 //la variable text existe, está vacía nada más, si sigue estando vacía va a ser false
  const newTask = {
    text: this.text, 
    day: this.day, 
    reminder: this.reminder}
    
    this.onAddTask.emit(newTask)
  }
  // esto es un objeto constante, le estás asignando atributos con lo que declaras
  //dentro de las llaves

  //this en este contexto hace referencia al objeto newTask

  //el operador new permite la creación de un nuevo objeto que pasa a ser el 
  //this de esa invocación y que es devuelvo implícitamente por la función invocada 
}
