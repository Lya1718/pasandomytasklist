// agregar los decoradores y el eventemitter
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { observable, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  //el decorador @Input permite identificar una propiedad de un componente
  @Input() text: string = "";
  @Input() color: string = "";
  //el componente botón lo queremos pasar para header, para el elemento padre
  //Instancia: Se llama instancia a todo objeto que deriva de una clase.
  // EventEmitter es un objeto capaz de emitir eventos
  @Output() btnClick = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }
// inicializamos la función onClick() del componente botón
// cuando hacemos click en el botón se llevarán a cabo las instrucciones de la función
  onClick(){
    this.btnClick.emit();
  }

}

//observer: objetivo ver como reaccionan ciertos objetos en base a otro objeto cuando realiza x accion o comportamiento
//publisher/subject objeto que emite valores, notifica valores que estén pasando
//van a haber observers que se van a suscribir a ese objeto para estar viendo ciertos cambios
// tenemos que definir subjetc su interfaz y la del observer
// interface Observer {
//   update(): void;
// este metodo update va a ser llamado desde el subjets
// }
// interface Subject {
// tiene tres metodos esenciales, agregar un nuevo sub al subject, remover y notificar
// subscribe(observer: observer): void;
// unsuscribe(observer: observer): void;
// notify(): void;
// }

// class Observable implements Subjects {
//   el observable necesita un lugar para almacenar los suscriptores que van a estar escuchando/viendo cuando este realice una accion
  
//   private observers: Observer[] = [];
//   suscribe(observer: Observer): void; {
//     this.observers.push(observer);
//   }

//   unsuscribe(observer: Observer): void; {
//     this.observers = this.observers.filter(obs => obs !== observers)
//   }

//   notify(): void; {
//     this.observers.forEach(observer => observer.update());
//   }
// }
// implementamos un subscribe
// class SomeObserver implements Observer {
//   update(): void; {
//     console.log("Event!!!");
//   }
// }

// const ob = new Observable();
// const o = new SomeObserver();
// const o2 = new SomeObserver();


// ahora tenemos que suscribir nuestro someobserver a nuestro observable
// llamar metodo suscribe 
// ob.subscribe(o);
// ob.subscribe(o2);

// ob.notify();
// ob.unsubscribe(o);
// ob.notify();

// EVENT EMITTER

// objeto que nos permite crear eventos personalizados, emitir valores y reaccionar a dichos eventos
// definimos que es el nombre de un evento y hacemos subscripciones con funciones que van a reaccionar a dichos eventos
// (click) => listeners 
// keypress => listeners 

// Type MapListener = Record<string, Listener[]>;

// record nos crea un tipo que sería como un objeto donde la K es string y el valor va a ser t que es un arreglo de listeners

// Type Record<K extends string | number | symbol, T> = { [P in K]: T; }

// {
//   string: [];
// }

// class EventEmitter {
//   necesitamos un mapa que contenga los listenersprivate mapListener:
