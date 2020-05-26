import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notes } from '../models/notes';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient, private vault : VaultService) { }

  getUsersFromData(topic_id : String): Observable<Notes[]> {
    return this.http.get<Notes[]>( this.vault.apiDomain + '/fetch-notes-by-topicid-admin/'+ topic_id);
  }

  newNotes(data, topic_id) {
    return this.http.post( this.vault.apiDomain + '/insert-notes/' + topic_id, data, {observe: 'response'});
  }

  updateNotes(data, notes_id: Number) {
    return this.http.post( this.vault.apiDomain + '/update-notes/' + notes_id, data, {observe: 'response'});
  }

  deleteNotes(notes_id: Number) {
    return this.http.delete( this.vault.apiDomain + '/delete-notes/' + notes_id,  {observe: 'response'});

  }

}