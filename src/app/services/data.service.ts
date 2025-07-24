import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environement';
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
    ? '/assets/data.json'
    : 'http://localhost:3000';

  private http = inject(HttpClient);

  private getData<T>(endpoint: string): Observable<T> {
    if (environment.production) {
      return this.http
        .get<any>(`${this.apiUrl}`)
        .pipe(map((data) => data[endpoint] as T));
    }
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`);
  }

  getProfile(): Observable<Profile> {
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
