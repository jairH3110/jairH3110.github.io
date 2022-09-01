import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
workExperience : Array<any> = []
  constructor() { }

  ngOnInit(): void {

  let  work1 = {fecha:"2010-2014",
                ubicacion:"Xalapa,ver",
                puesto:"practicante",
                empresa:"google",
                logros:[{descripcion:"creacion de un nuevo modulo en la pagina principal de google"},
                {descripcion:"investigacion de nuevas tecnologias y pruebas de estas"}] };
  
  let  work2 = {fecha:"2014-2017",
                ubicacion:"Ixtaczoquitlan",
                puesto:"Gerente de seguridad informatica",
                empresa:"tyasa",
                logros:[{descripcion:"disminucion del 40% en la merma del metal por causa de virus"},
                {descripcion:"mejora de la seguridad en un 200%"}] };
  
  let  work3 = {fecha:"2017-2020",
                ubicacion:"Orizaba",
                puesto:"CEO",
                empresa:"empresa super creible",
                logros:[{descripcion:"creacion de nuevos chips de procesadores"},
                {descripcion:"deteccion de todos los errores en el proceso de produccion"}] };

  let  work4 = {fecha:"2020-2022",
                ubicacion:"CDMX",
                puesto:"jefaso",
                empresa:"microsoft",
                logros:[{descripcion:"creacion de aplicaciones para linux"},
                {descripcion:" investigacion completada acerca de los bugs en las apps windows"}] };  
              
                         
    this.workExperience.push(work1);
  //  this.workExperience.push(work2);
   // this.workExperience.push(work3);
   // this.workExperience.push(work4);

  }

}
