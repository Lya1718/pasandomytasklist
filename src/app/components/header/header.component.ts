import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
//para saber en qué ruta estamos, importamos rutas
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //variable para el título, es importante definir el tipo de dato
  title: string = 'My Task List';
  showAddTask: boolean = true;
  subscription?: Subscription;

  //también tenemos que declarar en private la ruta
  constructor(
    private uiService: UiService,
    private router: Router
  ) {
    this.subscription = this.uiService.onToggle()
      .subscribe(value => this.showAddTask = value);
    //header y add task son subscriptores
  }

  ngOnInit(): void { }

  // tenemos que crear la funcion en el elemento padre
  toggleAddTask() {
    this.uiService.toggleTask();
  }

  // vamos a crear una funcion que va a recibir el router, un string
  // que nos retorne la url del path, si el url es igual al route de este
  // componente, va a devolver verdadero, sino falso
  hasRoute(route: string) {
    return this.router.url == route;
  }
}
