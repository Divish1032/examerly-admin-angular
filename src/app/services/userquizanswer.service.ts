import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VaultService } from './vault.service';
import { Observable } from 'rxjs';
import { UserQuizAnswer } from '../models/user-quiz-answer';

@Injectable({
  providedIn: 'root'
})
export class UserquizanswerService {

  constructor(private http: HttpClient, private vault : VaultService) { }

  getUsersAnswers(quiz_id : String, user_id : String): Observable<UserQuizAnswer[]> {
    return this.http.get<UserQuizAnswer[]>( this.vault.apiDomain + '/fetch-user-answer-by-quiz-admin/'+ quiz_id + '/' + user_id);
  }

}