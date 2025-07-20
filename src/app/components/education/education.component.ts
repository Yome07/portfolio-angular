import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  readonly dataService = inject(DataService);
  readonly trainings = toSignal(this.dataService.getTrainingsList());
}
