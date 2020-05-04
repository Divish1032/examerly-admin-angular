import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient, private vault : VaultService) { }

  getTopics(subject_id : String): Observable<Topic[]> {
    return this.http.get<Topic[]>( this.vault.apiDomain + '/topic/fetch-topic-by-subjectid-normal-users/'+ subject_id);
  }

  newTopic(data, subject_id) {
    return this.http.post( this.vault.apiDomain + '/topic/insert-topic/' + subject_id, data, {observe: 'response'});
  }

  updateTopic(data, topic_id: Number) {
    return this.http.post( this.vault.apiDomain + '/topic/update-topic/' + topic_id, data, {observe: 'response'});
  }

  deleteTopic(topic_id: Number) {
    return this.http.delete( this.vault.apiDomain + '/topic/delete-topic/' + topic_id,  {observe: 'response'});
  }

}