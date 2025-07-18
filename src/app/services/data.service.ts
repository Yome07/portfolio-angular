import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Contact,
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
  private apiUrl = 'http://localhost:3000';

  private http = inject(HttpClient);

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/profile`);
  }

  getContact(): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}/contact`);
  }

  getSocialList(): Observable<SocialLink[]> {
    return this.http.get<SocialLink[]>(`${this.apiUrl}/social`);
  }

  getSkills(): Observable<Skill> {
    return this.http.get<Skill>(`${this.apiUrl}/skills`);
  }

  getLanguages(): Observable<Language> {
    return this.http.get<Language>(`${this.apiUrl}/languages`);
  }
  getExperiences(): Observable<Experience> {
    return this.http.get<Experience>(`${this.apiUrl}/experiences`);
  }

  getEducations(): Observable<Education> {
    return this.http.get<Education>(`${this.apiUrl}/educations`);
  }

  getProjects(): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/projects`);
  }

  getTermsOfUse(): Observable<TermsOfUse> {
    return this.http.get<TermsOfUse>(`${this.apiUrl}/terms-of-use`);
  }
}
