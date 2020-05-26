import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VaultService } from './vault.service';
import { Observable } from 'rxjs';
import { Subscription } from '../models/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient, private vault : VaultService) { }

  getUsersFromData(subject_id : String): Observable<Subscription[]> {
    return this.http.get<Subscription[]>( this.vault.apiDomain + '/fetch-subject-subscription-by-subject/' + subject_id);
  }

  newRecord(data) {
    return this.http.post( this.vault.apiDomain + '/insert-subject-subscription', data, {observe: 'response'});
  }

  updateRecord(data, subject_subscription_id: Number) {
    return this.http.post( this.vault.apiDomain + '/update-subject-subscription/' + subject_subscription_id, data, {observe: 'response'});
  }

  deleteRecord(subject_subscription_id: Number) {
    return this.http.delete( this.vault.apiDomain + '/delete-subject-subscription/' + subject_subscription_id,  {observe: 'response'});
  }
}
