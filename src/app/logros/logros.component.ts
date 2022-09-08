import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.scss']
})
export class LogrosComponent implements OnInit {
Logro : Array<any> = []
  constructor() { }

  ngOnInit(): void {

  let logro1 = {ano:2004,
    nombre:"empleado del mes",
descripcion:"por el esfuerzo y constancia en el año del 2004 se le otorga el reconocimineto de empleado del mes"};

let logro2 = {ano:2006,
  nombre:"entrega del reconocimiento benito benitez por investigacion",
descripcion:"premio otorgado para los investigadores reconocidos"}
   
let logro3 = {ano:2010,
  nombre:"alta de produccion en 50%",
descripcion:"gracias por el aporte del trabajador se mejoro la eficencia de la empresa"}

let logro4 = {ano:"2020",
  nombre:"empleado del mes",
descripcion:"por el esfuerzo y constancia en el año del 2004 se le otorga el reconocimineto de empleado del mes"}   

this.Logro.push(logro1);
this.Logro.push(logro2);
this.Logro.push(logro3);
this.Logro.push(logro4);

}


}
