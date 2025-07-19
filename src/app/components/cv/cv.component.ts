import { Component } from '@angular/core';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-cv',
  imports: [EducationComponent, ExperienceComponent, SkillsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {}
