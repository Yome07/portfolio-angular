import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly dataService = inject(DataService);
  readonly social = toSignal(this.dataService.getSocialList());

  getEmailLink(): string {
    const emailLink = this.social()?.find((link) => link.name === 'email');
    return emailLink?.url || 'mailto:contact@example.com';
  }

  getLinkedInLink(): string {
    const linkedinLink = this.social()?.find(
      (link) => link.name === 'linkedin'
    );
    return linkedinLink?.url || '#';
  }
}
