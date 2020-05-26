import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course[];
  editCourse: Course;
  editForm: Boolean;
  newCourseForm: Boolean;

  constructor(private router : Router, private http: HttpClient, private courseService : CourseService, private toastr: ToastrService) { }

  ngOnInit() {
    this.editForm = false;
    this.newCourseForm = false;
    this.editCourse = null;
    this.getCourses();
  }

  getCourses() {
    this.courseService.getUsersFromData().subscribe(res => {
      if(res.status != undefined && res.status == 0){
        console.log(res.message);
        this.toastr.error('Success', res.message, { timeOut: 3000 });
        this.router.navigate(['/login']);
      }
      else{
        this.course = res;
        console.log(res);
      }
    });
  }

  showEditCourseForm(course : Course) {
    this.editForm = true;
    this.editCourse = course;
    this.newCourseForm = false;
  }

  showAddCourseForm() {
    this.editCourse = null;
    this.editForm = false;
    this.newCourseForm = true;

  }

  saveCourse(form: NgForm) {
    this.courseService.newCourse(form.value).subscribe(data => {
      if(data.status != undefined && data.status == 0){
        console.log(data.message);
        this.toastr.error('Success', data.message, { timeOut: 3000 });
        this.router.navigate(['/login']);
      }
      else{
        if(data.status == 200){
          this.newCourseForm = false;
          this.toastr.success('Success', 'Inserted a new entry', { timeOut: 3000 });
          this.ngOnInit();
        }
        else{
          console.log("Following Error - ");
          console.log(data.body);
          this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
        }
      }
    });
  }


  updateCourse(form: NgForm) {
    var course_id = form.value.course_id;
    this.courseService.updateCourse(form.value, course_id).subscribe(data => {
      if(data.status != undefined && data.status == 0){
        console.log(data.message);
        this.toastr.error('Success', data.message, { timeOut: 3000 });
        this.router.navigate(['/login']);
      }
      else{
        if(data.status == 200){
          this.editForm = false;
          this.editCourse = null;
          this.toastr.success('Success', 'Course table updated', { timeOut: 3000 });
          this.ngOnInit();
        }
        else{
          console.log("Following Error - ");
          console.log(data.body);
          this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
        }
      }
    });
  }

  removeCourse(course : Course) {
    if (confirm('Are you sure you want to delete this data from the database?')) {
      var course_id = course.course_id;
      this.courseService.deleteCourse(course_id).subscribe(data => {
        if(data.status != undefined && data.status == 0){
          console.log(data.message);
          this.toastr.error('Success', data.message, { timeOut: 3000 });
          this.router.navigate(['/login']);
        }
        else{
          if(data.status == 200){
            this.cancelEdits();
            this.cancelNewCourse();
            this.toastr.success('Success', 'Course Deleted');
            this.ngOnInit();
          }
          else{
            console.log("Following Error - ");
            console.log(data.body);
            this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
          }
        }
      });
    }    
  }

  cancelEdits() {
    this.editCourse = null;
    this.editForm = false;
  }

  cancelNewCourse() {
    this.newCourseForm = false;
  }
}
