import {
  Component,
  EventEmitter,
  Output,
  Input,
  inject,
  signal,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit, OnDestroy {
  readonly dataService = inject(DataService);
  readonly socialLinks = toSignal(this.dataService.getSocialList());
  readonly profile = toSignal(this.dataService.getProfile());

  @Input() isOpen = false;
  @Output() closeMenu = new EventEmitter<void>();

  activeSection = signal<string>('hero');

  ngOnInit() {
    this.setupScrollListener();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  private setupScrollListener() {
    window.addEventListener('scroll', this.handleScroll.bind(this), {
      passive: true,
    });
  }

  private handleScroll() {
    const sections = ['home', 'portfolio', 'cv', 'contact'];
    const scrollPosition = window.scrollY + 100; // Offset pour la détection

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const { offsetTop, offsetHeight } = element;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          this.activeSection.set(sectionId);
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeMenu.emit();
  }
}
