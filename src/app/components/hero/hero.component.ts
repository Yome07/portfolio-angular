import { Component, inject, OnInit } from '@angular/core';
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

  ngOnInit() {
    alert('1. Composant chargé');

    // Pour le debug, surveillez les changements du signal
    if (this.profile()) {
      alert(
        '2. Données reçues: ' +
          Object.keys(this.profile()!).length +
          ' éléments'
      );
      alert('3. Signal mis à jour automatiquement');
    }
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
