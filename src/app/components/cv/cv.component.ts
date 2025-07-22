import { Component, signal } from '@angular/core';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';

type CVSection = 'education' | 'experience' | 'skills';

@Component({
  selector: 'app-cv',
  imports: [EducationComponent, ExperienceComponent, SkillsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {
  // section active par défaut
  activeSection = signal<CVSection>('skills');

  // changer de section
  selectSection(section: CVSection): void {
    this.activeSection.set(section);
  }

  // Vérifier si une section est active
  isSectionActive(section: CVSection): boolean {
    return this.activeSection() === section;
  }

  // Méthode pour télécharger le CV PDF
  downloadCV(): void {
    const cvUrl = 'CV_developpeur_fullstack_Guillaume_Amselle_Andreux.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_developpeur_fullstack_Guillaume_Amselle_Andreux.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
