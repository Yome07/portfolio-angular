import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly dataService = inject(DataService);
  readonly profile = toSignal(this.dataService.getProfile());
  readonly termsOfUse = toSignal(this.dataService.getTermsOfUse());

  isTermsModalOpen = false;

  openTermsModal(): void {
    this.isTermsModalOpen = true;
  }

  closeTermsModal(): void {
    this.isTermsModalOpen = false;
  }
}
