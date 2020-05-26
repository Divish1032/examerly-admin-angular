import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lecture } from '../models/lecture';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  constructor(private http: HttpClient, private vault : VaultService) { }

  getUsersFromData(topic_id : String): Observable<Lecture[]> {
    return this.http.get<Lecture[]>( this.vault.apiDomain + '/fetch-lecture-by-topicid-admin/'+ topic_id);
  }

  newLecture(data, topic_id) {
    return this.http.post( this.vault.apiDomain + '/insert-lecture/' + topic_id, data, {observe: 'response'});
  }

  updateLecture(data, lecture_id: Number) {
    return this.http.post( this.vault.apiDomain + '/update-lecture/' + lecture_id, data, {observe: 'response'});
  }

  deleteLecture(lecture_id: Number) {
    return this.http.delete( this.vault.apiDomain + '/delete-lecture/' + lecture_id,  {observe: 'response'});
  }

}