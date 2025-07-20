import { Component, inject, LOCALE_ID } from '@angular/core';
import { DataService } from '../../services/data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Experience } from '../../models/portfoilio.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [DatePipe],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly dataService = inject(DataService);
  readonly experiences = toSignal(this.dataService.getExperiencesList());

  getEndDate(experience: Experience): string {
    return experience.end ? experience.end : 'Présent';
  }
}
