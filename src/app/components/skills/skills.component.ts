import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataService } from '../../services/data.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [NgClass],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly dataService = inject(DataService);
  readonly skills = toSignal(this.dataService.getSkillsList());
  readonly languages = toSignal(this.dataService.getLanguagesList());
}
