import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = true;
  //vamos a definir una variable de tipo boolean
  private subject = new Subject<any>();
  //todo lo de rxjs hay que importar, subject por ejemplo
  //observable que puede tener multiples subscripciones
  //primero generamos subscripciones y luego la observable
  

  //js hace que todas las funciones se ejecuten al mismo tiempo
  //rxjs hace que cada una se tome su tiempo de cargar

  // Un Sujeto RxJS es un tipo especial de Observable que permite la multidifusión de valores a muchos Observadores. Mientras los 
  // Observables simples son de monodifusión (cada Observador suscrito es propietario de una ejecución independiente del Observable), los Sujetos son de multidifusión.

  constructor() { }

  toggleTask(): void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
    //next hace que tu observable, tu subject retorne, devuelva un valor
    // Cada vez que llamamos al método next del observador dentro del callback que le
    // hemos pasado a Observable, estamos produciendo los valores que nuestro observable emitirá.
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable()
  }
}
