import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "What I do!!",
    subTitle: " FULL STACK DEVELOPER ",
    skills: [
      " Develop interactive Front end",
      " Creating application backend ",
      " Progressive Web Applications ( PWA ) in normal and SPA Stacks"
      
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
