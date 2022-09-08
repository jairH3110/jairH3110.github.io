import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education : Array<any>=[]
  constructor() { }

  ngOnInit(): void {

   let escuela ={fecha:"10/06/2004 - 10/07/2006",
   lugar:"Ixtaczoquitlan",
   nombre:"hans critian andersen",
   estudio:"kinder especialista en tijeritas 2"}

   let escuela2 ={fecha:"1/08/2006 - 10/07/2012",
   lugar:"Orizaba",
   nombre:"Antonio I Villareal",
   estudio:"escuela primaria"}

   let escuela3 ={fecha:"1/08/2012 - 10/07/2015",
   lugar:"Ixtaczoquitlan",
   nombre:"Escuela Secundaria Tecnica numero 74",
   estudio:"escuela secundaria tecnico en soldadura"}

   let escuela4 ={fecha:"1/08/2015 - 10/07/2018",
   lugar:"Orizaba",
   nombre:"Colegio Nacional de Educacion Profesional Tecnica",
   estudio:"PTB en Informatica"}

   
   let escuela5 ={fecha:"1/08/2018 - --/--/--",
   lugar:"Ixtaczoquitlan",
   nombre:"Universidad Veracruzana",
  estudio:"Ingenieria en Software"}

  this.education.push(escuela);
  this.education.push(escuela2);
  this.education.push(escuela3);
  this.education.push(escuela4);
  this.education.push(escuela5);
  }

  
}
  


