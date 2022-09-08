import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

import { SkillsComponent } from './skills/skills.component';
import { LogrosComponent } from './logros/logros.component';

import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,

    SkillsComponent,
    LogrosComponent,

    EducationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
