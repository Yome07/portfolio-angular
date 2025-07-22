import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  readonly dataService = inject(DataService);
  readonly socialLinks = toSignal(this.dataService.getSocialList());
  readonly profile = toSignal(this.dataService.getProfile());

  @Input() isOpen = false;
  @Output() closeMenu = new EventEmitter<void>();

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeMenu.emit();
  }
}
