import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaultService } from './vault.service';
import { Question } from '../models/question';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http: HttpClient, private vault : VaultService) { }

  getUsersFromData(quiz_id : String): Observable<Question[]> {
    return this.http.get<Question[]>( this.vault.apiDomain + '/fetch-questions-by-quizid-admin/' + quiz_id);
  }

  newRecord(data) {
    return this.http.post( this.vault.apiDomain + '/insert-question', data, {observe: 'response'});
  }

  updateRecord(data, question_id: Number) {
    return this.http.post( this.vault.apiDomain + '/update-question/' + question_id, data, {observe: 'response'});
  }

  deleteRecord(question_id: Number) {
    return this.http.delete( this.vault.apiDomain + '/delete-question/' + question_id,  {observe: 'response'});
  }
}