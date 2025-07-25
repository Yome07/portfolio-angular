import { Component, effect, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  readonly dataService = inject(DataService);
  profile = toSignal(this.dataService.getProfile());

  constructor() {
    // Effect pour surveiller les changements du signal
    effect(() => {
      const profileData = this.profile();
      if (profileData) {
        alert(
          '2. Données reçues: ' + Object.keys(profileData).length + ' éléments'
        );
        alert('3. Signal mis à jour automatiquement');
      }
    });
  }

  ngOnInit() {
    alert('1. Composant chargé');

    // Le signal est undefined ici car la requête HTTP n'est pas encore terminée
    console.log('Profile dans ngOnInit:', this.profile()); // undefined
  }

  downloadCV(): void {
    // Logique pour télécharger le CV
    const link = document.createElement('a');
    const cvPath = this.profile()?.cv
      ? `${this.profile()!.cv}`
      : './src/assets/test.pdf';
    window.open(cvPath, '_blank');
    link.click();
  }
}
