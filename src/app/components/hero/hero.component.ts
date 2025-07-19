import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly dataService = inject(DataService);
  readonly profile = toSignal(this.dataService.getProfile());

  downloadCV(): void {
    // Logique pour télécharger le CV
    const link = document.createElement('a');
    const cvPath = this.profile()?.cv
      ? `./src/assets/${this.profile()!.cv}`
      : './src/assets/test.pdf';
    window.open(cvPath, '_blank');
    link.click();
  }
}
