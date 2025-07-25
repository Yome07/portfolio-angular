import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environement.development';
import { map } from 'rxjs/operators';
import {
  Education,
  Experience,
  Language,
  Profile,
  Project,
  Skill,
  SocialLink,
  TermsOfUse,
} from '../models/portfoilio.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = environment.production
    ? `./assets/data.json?v=${Date.now()}`
    : 'http://localhost:3000';

  private http = inject(HttpClient);

  private getData<T>(endpoint: string): Observable<T> {
    if (environment.production) {
      alert('environment.production is true, using assets/data.json');
      return this.http
        .get<Record<string, T>>(`${this.apiUrl}`)
        .pipe(map((data) => data[endpoint] as T));
    }
    alert('environment.production is false, using http://localhost:3000');
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`);
  }

  getProfile(): Observable<Profile> {
    alert(
      `Environment: ${environment.envName}, Production: ${environment.production}`
    );
    alert('Service getProfile() appelé');
    return this.getData<Profile>('profile');
  }

  getSocialList(): Observable<SocialLink[]> {
    return this.getData<SocialLink[]>('social');
  }

  getSkillsList(): Observable<Skill[]> {
    return this.getData<Skill[]>('skills');
  }

  getLanguagesList(): Observable<Language[]> {
    return this.getData<Language[]>('languages');
  }
  getExperiencesList(): Observable<Experience[]> {
    return this.getData<Experience[]>('experiences');
  }

  getTrainingsList(): Observable<Education[]> {
    return this.getData<Education[]>('trainings');
  }

  getProjectsList(): Observable<Project[]> {
    return this.getData<Project[]>('project');
  }

  getTermsOfUse(): Observable<TermsOfUse> {
    return this.getData<TermsOfUse>('terms-of-use');
  }
}
