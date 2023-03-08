import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// importamos el htpclientmodule y lo agregamos en los imports
import {HttpClientModule} from '@angular/common/http'
//tenemos que agregar el form cuando querramos hacer un formulario
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

// Este módulo le indicará al enrutador qué vista mostrar cuando un usuario hace click en un enlace o pega una URL en la barra de direcciones del navegador. 
// En resumen, podemos decir que el Sistema de Routing de Angular tiene por objeto mostrar las vistas de la aplicación en función de una ruta.

const appRoutes:Routes = [
  {path: '', component: TasksComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
