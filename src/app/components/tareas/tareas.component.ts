import { Component } from '@angular/core';
import { Tarea } from 'src/app/components/models/Tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
listTareas: Tarea [] = [];
nombreTarea='';

constructor()
{

}
ngOnInit(): void {


}
agregarTarea()
  {
    //console.log(this.nombreTarea);
  //creamos el objeto de tipo tareas
  const tarea: Tarea={
    nombre: this.nombreTarea,
    estado: false
  }
  //agregar el objeto tarea al arreglo
  this.listTareas.push(tarea);
  //reset
  this.nombreTarea="";
}
eliminarTarea(index:number):void
{
  this.listTareas.splice(index,1);
}

actualizarTarea(tarea: Tarea, index:number){
  
this.listTareas[index].estado =! tarea.estado
}
  }
