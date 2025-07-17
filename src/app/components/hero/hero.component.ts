import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  downloadCV(): void {
    // Logique pour télécharger le CV
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf'; // Chemin vers votre CV
    link.download = 'CV_Guillaume_Amselle_Andreux.pdf';
    link.click();
  }
}
