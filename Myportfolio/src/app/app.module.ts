import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ButtonComponent } from './button/button.component';
//import { SocialMediaComponent } from './social-media/social-media.component';

import { SkillsComponent } from './skills/skills.component';
import { SoftwareSkillComponent } from './skills/software-skill/software-skill.component';
import { SkillProgressComponent } from './skill-progress/skill-progress.component';
import { FooterComponent } from './footer/footer.component';
import { TopButtonComponent } from './top-button/top-button.component';
import { ContactComponent } from './contact/contact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceCardComponent } from './experience/experience-card/experience-card.component';

import { EducationComponent } from './education/education.component';

import { HttpClientModule } from '@angular/common/http';
import { GithubCalendarComponent } from './github-calendar/github-calendar.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,

      GreetingComponent,
        ButtonComponent,
       // SocialMediaComponent,
        SkillsComponent,
        SoftwareSkillComponent,
        SkillProgressComponent,
        FooterComponent,
        TopButtonComponent,
        ContactComponent,
        TimelineComponent,
        ExperienceComponent,
        ExperienceCardComponent,
        
        EducationComponent,
        GithubCalendarComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    BrowserAnimationsModule,
    
    HttpClientModule,
    
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
