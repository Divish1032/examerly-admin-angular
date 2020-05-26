import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaultService } from './vault.service';
import { Quiz } from '../models/quiz';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient, private vault : VaultService) { }

  getUsersFromData(topic_id : String): Observable<Quiz[]> {
    return this.http.get<Quiz[]>( this.vault.apiDomain + '/fetch-quiz-by-topicid-admin/'+ topic_id);
  }

  newQuiz(data, topic_id) {
    return this.http.post( this.vault.apiDomain + '/insert-quiz/' + topic_id, data, {observe: 'response'});
  }

  updateQuiz(data, quiz_id: Number) {
    return this.http.post( this.vault.apiDomain + '/update-quiz/' + quiz_id, data, {observe: 'response'});
  }

  deleteQuiz(quiz_id: Number) {
    return this.http.delete( this.vault.apiDomain + '/delete-quiz-by-quizid/' + quiz_id,  {observe: 'response'});
  }

}