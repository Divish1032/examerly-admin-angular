import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VaultService } from './vault.service';
import { Observable } from 'rxjs';
import { UserQuiz } from '../models/userQuiz';

@Injectable({
  providedIn: 'root'
})
export class UserquizService {

  constructor(private http: HttpClient, private vault : VaultService) { }

  getUsersFromQuizAnswers(quiz_id : String): Observable<UserQuiz[]> {
    return this.http.get<UserQuiz[]>( this.vault.apiDomain + '/fetch-answer-userid-admin/'+ quiz_id);
  }
}
