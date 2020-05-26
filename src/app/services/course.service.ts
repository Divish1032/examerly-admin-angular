import { Injectable } from '@angular/core';
import { Course} from '../models/course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})


export class CourseService {
    constructor(private http: HttpClient, private vault : VaultService) {

   }

  getUsersFromData(): any {
    return this.http.get( this.vault.apiDomain + '/fetch-courses-admin');
  }

  newCourse(data) :any {
    return this.http.post( this.vault.apiDomain + '/insert-course', data, {observe: 'response'});
  }

  updateCourse(data, course_id): any {
    return this.http.post( this.vault.apiDomain + '/update-course/' + course_id, data, {observe: 'response'});
  }

  deleteCourse(course_id: Number): any {
    return this.http.delete( this.vault.apiDomain + '/delete-course/' + course_id,  {observe: 'response'});
  }
}
