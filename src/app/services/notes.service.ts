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
    return this.http.get<Notes[]>( this.vault.apiDomain + '/notes/fetch-notes-by-topicid/'+ topic_id);
  }

  newNotes(data, topic_id) {
    return this.http.post( this.vault.apiDomain + '/notes/insert-notes/' + topic_id, data, {observe: 'response'});
  }

  updateNotes(data, notes_id: Number) {
    return this.http.post( this.vault.apiDomain + '/notes/update-notes/' + notes_id, data, {observe: 'response'});
  }

  deleteNotes(notes_id: Number) {
    return this.http.delete( this.vault.apiDomain + '/notes/delete-notes/' + notes_id,  {observe: 'response'});

  }

}