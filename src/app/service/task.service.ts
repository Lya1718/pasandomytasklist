import { Injectable } from '@angular/core';
// tenemos que importar el observable y el HttpClient(Básicamente es lo que vas
// a utilizar para hacer llamadas a una API REST y obtener resultados de la misma,
// métodos get y post.
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs'
import { Task } from '../components/Task';
//el servicio en vez de leer de la lista de tareas va a tener que leer de
import { TASKS } from '../components/mock-tasks';

//esto es para informarle al backend que lo que le estamos mandando es un json
//es importante cuando usamos el método put o post, no para get o delete
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
// tenemos que definir de dónde vamos a sacar los datos, de qué api
// es importante inicializar en el constructor el httpclient, sino lo importas
//al pedo, o sea no sirve
export class TaskService {
  private apiUrl = 'http://localhost:5001/tasks'
  constructor(
    private http:HttpClient
  ) { }

  // La API Fetch proporciona una interfaz JavaScript para acceder y 
  // manipular partes del canal HTTP, tales como peticiones y respuestas. 
  // También provee un método global fetch() (en-US) que proporciona una
  // forma fácil y lógica de obtener recursos de forma asíncrona por la red
  
// vamos a crear un método público, que la función sea de tipo observable
// y de tipo task[]

  getTasks(): Observable<Task[]>{
    const tasks = of(TASKS);
    return this.http.get<Task[]>(this.apiUrl);
  }

  // of(TASKS); cumple la misma función que this.http.get<Task[]>(this.apiUrl);
  // porque el of() solo crea un nuevo array. Creamos esa variable para tasks.ts

  // vamos a llamar al httpservice (this.http) y vamos a decirle que vamos a hacer un método
  // de tipo get, esa petición necesita una url para llevarse a cabo (this.url)
  //le estamos pidiendo que nos devuelva la lista de tareas <Task[]>
  
  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

// creamos una función del tipo observable task[], declaramos una constante para llamar
// a la url y de ahí llamar el id de la tarea, tienen que estar juntos porque el task.id
// es hijo de apiUrl, el / o , es para señalar una relación entre ambos, pero no es necesario,
//  y el $ es para aclarar que son variables, van separados porque son padre/hijo, no hermanos.
// van entre comillas invertidas porque se tiene que declarar apiUrl para llegar al task.id

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }  

  //lo mismo que hacemos con delete, lo hacemos con updateTaskReminder
  //pero en vez de delete, usamos put para actualizar un dato de la lista,
  // que recibe la url y la tarea, o sea, la url y el objeto que se va
  // a modificar
  //la base de datos se va a encargar de todo 


  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }
}
