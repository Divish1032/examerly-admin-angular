import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { LectureComponent } from './lecture/lecture.component';
import { NotesComponent } from './notes/notes.component';
import { TopicComponent } from './topic/topic.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { UserquizComponent } from './userquiz/userquiz.component';
import { UserquizanswerComponent } from './userquizanswer/userquizanswer.component';
import { LoginComponent } from './login/login.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path : 'course', component: CourseComponent,  canActivate: [AuthGuard] },
  { path : 'course/:id/subject', component: SubjectComponent,  canActivate: [AuthGuard]},
  { path : 'course/:id/subject/:subject_id/subscription', component : SubscriptionComponent,  canActivate: [AuthGuard]},
  { path : 'course/:id/subject/:subject_id/topic', component: TopicComponent,  canActivate: [AuthGuard]},
  { path : 'course/:id/subject/:subject_id/topic/:topic_id/notes', component: NotesComponent, canActivate: [AuthGuard]},
  { path : 'course/:id/subject/:subject_id/topic/:topic_id/lecture', component: LectureComponent, canActivate: [AuthGuard]},
  { path : 'course/:id/subject/:subject_id/topic/:topic_id/quiz', component: QuizComponent, canActivate: [AuthGuard]},
  { path : 'course/:id/subject/:subject_id/topic/:topic_id/quiz/:quiz_id/questions', component: QuestionComponent, canActivate: [AuthGuard]},
  { path : 'course/:id/subject/:subject_id/topic/:topic_id/quiz/:quiz_id/userquiz', component: UserquizComponent, canActivate: [AuthGuard]},
  { path : 'course/:id/subject/:subject_id/topic/:topic_id/quiz/:quiz_id/userquiz/:user_id/answers', component: UserquizanswerComponent, canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
