import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { LectureComponent } from './lecture/lecture.component';
import { NotesComponent } from './notes/notes.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopicComponent } from './topic/topic.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { UserquizComponent } from './userquiz/userquiz.component';
import { UserquizanswerComponent } from './userquizanswer/userquizanswer.component';
import { LoginComponent } from './login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { CourseService } from './services/course.service';
import { SubjectService } from './services/subject.service';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SubjectComponent,
    LectureComponent,
    NotesComponent,
    TopicComponent,
    QuizComponent,
    QuestionComponent,
    UserquizComponent,
    UserquizanswerComponent,
    LoginComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [ 'localhost:3000','ec2-13-233-227-222.ap-south-1.compute.amazonaws.com:3000/'],
        blacklistedRoutes: [ 'localhost:3000/admin/login', 'ec2-13-233-227-222.ap-south-1.compute.amazonaws.com:3000/admin/login']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard,
    CourseService,
    SubjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
