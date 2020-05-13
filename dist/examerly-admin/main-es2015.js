(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Navigate To:</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <button class=\"btn btn-sm btn-outline-info\" routerLink=\"/course\">Course Table</button>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <h1>Admin Panel</h1>\n  <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/course/course.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/course/course.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"add btn btn-outline-success\" (click)=\"showAddCourseForm()\"><i class=\"fa fa-plus\"></i></button>\n<h4>Course Data</h4>\n<table class=\"table table-bordered table-striped table-hover\">\n    <thead>\n        <tr>\n            <th class=\"text-center\">Course ID</th>\n            <th class=\"text-center\">Course Name</th>\n            <th class=\"text-center\">Description</th>\n            <th class=\"text-center\">Priority</th>\n            <th class=\"text-center\">Hide</th>\n            \n            <th class=\"text-center\">Action</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let c of course\">\n            <td>{{ c.course_id }}</td>\n            <td>{{ c.course_name }}</td>\n            <td>{{ c.description }}</td>\n            <td>{{ c.priority }}</td>\n            <td>{{ c.hide }}</td>\n            \n\n            <td>\n                <button class=\"btn btn-outline-info mr-2\" (click)=\"showEditCourseForm(c)\">\n                    <i class=\"fa fa-edit\"></i>\n                </button>\n                <button class=\"btn btn-outline-danger\" (click)=\"removeCourse(c)\">\n                    <i class=\"fa fa-minus\"></i>\n                </button>\n                <br>\n                <a class=\"btn btn-outline-dark subject_btn\"  [routerLink] = \"['/course', c.course_id, 'subject']\">View Subjects</a>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<br />\n\n<form *ngIf=\"editCourse\"   #myform2 = \"ngForm\" (ngSubmit) = \"updateCourse(myform2)\">\n    <h2>Edit Course Details</h2>\n    <p>Course ID <input type=\"text\" name=\"course_id\" ngModel=\"{{editCourse.course_id}}\" readonly/></p>\n    <p>Course Name <input type=\"text\" name=\"course_name\" ngModel=\"{{editCourse.course_name}}\" required/></p>\n    <p>Description <input type=\"text\" name=\"description\" ngModel=\"{{editCourse.description}}\" /></p>\n    <p>Priority <input type=\"text\" name=\"priority\" ngModel=\"{{editCourse.priority}}\" /></p>\n    <p>Hide <input type=\"text\" name=\"hide\" ngModel=\"{{editCourse.hide}}\" /></p>\n\n    <p>\n        <button type=\"submit\" class=\"btn btn-outline-primary mr-2\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancelEdits()\">Cancel</button>\n    </p>\n</form>\n\n<form *ngIf=\"newCourseForm\"  #myform = \"ngForm\" (ngSubmit) = \"saveCourse(myform)\">\n    <h2>Add New Course</h2>\n    <p>Course Name <input type=\"text\" name=\"course_name\"  required ngModel/></p>\n    <p>Description <input type=\"text\" name=\"description\" ngModel /></p>\n    <p>Priority <input type=\"text\" name=\"priority\" ngModel /></p>\n    <p>Hide <input type=\"text\" name=\"hide\" ngModel /></p>\n    \n    \n        <button type=\"submit\" class=\"btn btn-outline-primary mr-2\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancelNewCourse()\">Cancel</button>\n    \n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lecture/lecture.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lecture/lecture.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<button class=\"back btn btn-outline-info\" (click)=\"redirectBack()\">Back</button>\n<button class=\" add btn btn-outline-success\" (click)=\"showAddLectureForm()\"><i class=\"fa fa-plus\"></i></button>\n\n<h4>Lecture Data</h4>\n<table class=\"table table-bordered table-striped table-hover\">\n    <thead>\n        <tr>\n            <th class=\"text-center\">Topic ID</th>\n            <th class=\"text-center\">Lecture ID</th>\n            <th class=\"text-center\">Lecture Name</th>\n            <th class=\"text-center\">Video Link</th>\n            <th class=\"text-center\">Description</th>\n            <th class=\"text-center\">Subscription</th>\n            \n            <th class=\"text-center\">Priority</th>\n            <th class=\"text-center\">Hide</th>\n            <th class=\"text-center\">Action</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let l of lecture\">\n            <td>{{ l.topic_id }}</td>\n            <td>{{ l.lecture_id }}</td>\n            <td>{{ l.lecture_name }}</td>\n            <td>{{ l.video_link }}</td>\n            <td>{{ l.description }}</td>\n            <td>{{ l.subscription }}</td>\n            <td>{{ l.priority }}</td>\n            <td>{{ l.hide }}</td>\n\n            <td>\n                <button class=\"btn btn-outline-info mr-2\" (click)=\"showEditLectureForm(l)\">\n                    <i class=\"fa fa-edit\"></i>\n                </button>\n                <button class=\"btn btn-outline-danger\" (click)=\"removeLecture(l)\">\n                    <i class=\"fa fa-minus\"></i>\n                </button>\n                <br>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<br />\n\n<form *ngIf=\"editForm\"  #myform2 = \"ngForm\" (ngSubmit) = \"updateLecture(myform2)\">\n    <h2>Edit Lecture Details</h2>\n    <p>Topic ID <input type=\"text\" name=\"topic_id\" ngModel=\"{{editLecture.topic_id}}\"  readonly/></p>\n    <p>Lecture ID <input type=\"text\" name=\"lecture_id\" ngModel=\"{{editLecture.lecture_id}}\" readonly/></p>\n    <p>Lecture Name <input type=\"text\" name=\"lecture_name\" ngModel=\"{{editLecture.lecture_name}}\" /></p>\n    <p>Description <input type=\"text\" name=\"description\" ngModel=\"{{editLecture.description}}\" /></p>\n    <p>Subscription <input type=\"text\" name=\"subscription\" ngModel=\"{{editLecture.subscription}}\" /></p>\n    <p>Video Link <input type=\"text\" name=\"video_link\" ngModel=\"{{editLecture.video_link}}\" /></p>\n    <p>Priority <input type=\"text\" name=\"priority\" ngModel=\"{{editLecture.priority}}\" /></p>\n    <p>Hide <input type=\"text\" name=\"hide\" ngModel=\"{{editLecture.hide}}\" /></p>\n\n    <p>\n        <button type=\"submit\" class=\"btn btn-outline-primary mr-2\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancelEdits()\">Cancel</button>\n    </p>\n</form>\n\n<form *ngIf=\"newLectureForm\" #myform = \"ngForm\" (ngSubmit) = \"saveLecture(myform)\">\n    <h2>Add New Course</h2>\n    <p>Topic ID <input type=\"text\" name=\"topic_id\" ngModel=\"{{topic_id}}\"  readonly/></p>\n    <p>Lecture Name <input type=\"text\" name=\"lecture_name\" ngModel required/></p>\n    <p>Description <input type=\"text\" name=\"description\" ngModel/></p>\n    <p>Subscription <input type=\"text\" name=\"subscription\" ngModel/></p>\n    <p>Video Link <input type=\"text\" name=\"video_link\" ngModel/></p>\n    <p>Priority <input type=\"text\" name=\"priority\" ngModel/></p>\n    <p>Hide <input type=\"text\" name=\"hide\" ngModel/></p>\n\n    <p>\n        <button type=\"submit\" class=\"btn btn-outline-primary mr-2\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancelNewLecture()\">Cancel</button>\n    </p>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<button class=\"back btn btn-outline-info\" (click)=\"redirectBack()\">Back</button>\n<button class=\" add btn btn-outline-success\" (click)=\"showAddNotesForm()\"><i class=\"fa fa-plus\"></i></button>\n<h4>Notes Data</h4>\n<table class=\"table table-bordered table-striped table-hover\">\n    <thead>\n        <tr>\n            <th class=\"text-center\">Topic ID</th>\n            <th class=\"text-center\">Notes ID</th>\n            <th class=\"text-center\">Notes Name</th>\n            <th class=\"text-center\">Notes Link</th>\n            <th class=\"text-center\">Subscription</th>\n            <th class=\"text-center\">Priority</th>\n            <th class=\"text-center\">Hide</th>\n            <th class=\"text-center\">Action</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let n of notes\">\n            <td>{{ n.topic_id }}</td>\n            <td>{{ n.notes_id }}</td>\n            <td>{{ n.notes_name }}</td>\n            <td>{{ n.notes_link }}</td>\n            <td>{{ n.subscription }}</td>\n            \n            <td>{{ n.priority }}</td>\n            <td>{{ n.hide }}</td>\n\n            <td>\n                <button class=\"btn btn-outline-info mr-2\" (click)=\"showEditNotesForm(n)\">\n                    <i class=\"fa fa-edit\"></i>\n                </button>\n                <button class=\"btn btn-outline-danger\" (click)=\"removeNotes(n)\">\n                    <i class=\"fa fa-minus\"></i>\n                </button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<br />\n\n<form *ngIf=\"editForm\"  #myform2 = \"ngForm\" (ngSubmit) = \"updateNotes(myform2)\">\n    <h2>Edit Notes Details</h2>\n    <p>Topic ID <input type=\"text\" name=\"topic_id\" ngModel=\"{{editNotes.topic_id}}\" readonly/></p>\n    <p>Notes ID <input type=\"text\" name=\"notes_id\" ngModel=\"{{editNotes.notes_id}}\" readonly/></p>\n    <p>Notes Name <input type=\"text\" name=\"notes_name\" ngModel=\"{{editNotes.notes_name}}\" /></p>\n    <p>Notes Link <input type=\"text\" name=\"notes_link\" ngModel=\"{{editNotes.notes_link}}\" /></p>\n    <p>Subscription <input type=\"text\" name=\"subscription\" ngModel=\"{{editNotes.subscription}}\" /></p>\n    \n    <p>Priority <input type=\"text\" name=\"priority\" ngModel=\"{{editNotes.priority}}\" /></p>\n    <p>Hide <input type=\"text\" name=\"hide\" ngModel=\"{{editNotes.hide}}\" /></p>\n\n    <p>\n        <button type=\"submit\" class=\"btn btn-outline-primary mr-2\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancelEdits()\">Cancel</button>\n    </p>\n</form>\n\n<form *ngIf=\"newNotesForm\" #myform = \"ngForm\" (ngSubmit) = \"saveNotes(myform)\">\n    <h2>Add New Course</h2>\n    <p>Topic ID <input type=\"text\" name=\"topic_id\" ngModel=\"{{topic_id}}\"  readonly/></p>\n    <p>Notes Name <input type=\"text\" name=\"notes_name\" ngModel required/></p>\n    <p>Notes Link <input type=\"text\" name=\"notes_link\" ngModel/></p>\n    <p>Subscription <input type=\"text\" name=\"subscription\" ngModel/></p>\n    <p>Priority <input type=\"text\" name=\"priority\" ngModel/></p>\n    <p>Hide <input type=\"text\" name=\"hide\" ngModel/></p>\n\n    <p>\n        <button type=\"submit\" class=\"btn btn-outline-primary mr-2\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancelNewNotes()\">Cancel</button>\n    </p>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question/question.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question/question.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<button class=\"back btn btn-outline-info\" (click)=\"redirectBack()\">Back</button>\n<button class=\" add btn btn-outline-success\" (click)=\"showAddForm()\"><i class=\"fa fa-plus\"></i></button>\n\n<h4>Question Data</h4>\n<table class=\"table table-bordered table-striped table-hover\">\n    <thead>\n        <tr>\n            <th class=\"text-center\">Question ID</th>\n            <th class=\"text-center\">Quiz ID</th>\n            <th class=\"text-center\">Question</th>\n            <th class=\"text-center\">Options</th>\n            <th class=\"text-center\">Option1</th>\n            <th class=\"text-center\">Option2</th>\n            <th class=\"text-center\">Option3</th>\n            <th class=\"text-center\">Option4</th>\n            <th class=\"text-center\">Option5</th>\n            <th class=\"text-center\">Option6</th>\n            <th class=\"text-center\">Option7</th>\n            <th class=\"text-center\">Correct answer</th>\n            <th class=\"text-center\">Total Mark</th>\n            \n            <th class=\"text-center\">Priority</th>\n            <th class=\"text-center\">Hide</th>\n            <th class=\"text-center\">Action</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let l of data\">\n            <td>{{ l.question_id }}</td>\n            <td>{{ l.quiz_id }}</td>\n            <td>{{ l.question }}</td>\n            <td>{{ l.options }}</td>\n            <td>{{ l.option1 }}</td>\n            <td>{{ l.option2 }}</td>\n            <td>{{ l.option3 }}</td>\n            <td>{{ l.option4 }}</td>\n            <td>{{ l.option5 }}</td>\n            <td>{{ l.option6 }}</td>\n            <td>{{ l.option7 }}</td>\n            <td>{{ l.correct_answer }}</td>\n            <td>{{ l.total_mark }}</td>\n            <td>{{ l.priority }}</td>\n            <td>{{ l.hide }}</td>\n\n            <td>\n                <button class=\"btn btn-outline-info mr-2\" (click)=\"showEditForm(l)\">\n                    <i class=\"fa fa-edit\"></i>\n                </button>\n                <button class=\"btn btn-outline-danger\" (click)=\"removeData(l)\">\n                    <i class=\"fa fa-minus\"></i>\n                </button>\n                <br>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<br />\n\n<form *ngIf=\"editForm\"  #myform2 = \"ngForm\" (ngSubmit) = \"updateData(myform2)\">\n    <h2>Edit Question Details</h2>\n    <p>Question ID <input type=\"text\" name=\"question_id\" ngModel=\"{{editData.question_id}}\"  readonly/></p>\n    <p>Quiz ID <input type=\"text\" name=\"quiz_id\" ngModel=\"{{editData.quiz_id}}\" readonly/></p>\n    <p>Question <input type=\"text\" name=\"question\" ngModel=\"{{editData.question}}\" /></p>\n    <p>Options <input type=\"text\" name=\"options\" ngModel=\"{{editData.options}}\" /></p>\n    <p>Option 1<input type=\"text\" name=\"option1\" ngModel=\"{{editData.option1}}\" /></p>\n    <p>Option 2<input type=\"text\" name=\"option2\" ngModel=\"{{editData.option2}}\" /></p>\n    <p>Option 3<input type=\"text\" name=\"option3\" ngModel=\"{{editData.option3}}\" /></p>\n    <p>Option 4<input type=\"text\" name=\"option4\" ngModel=\"{{editData.option4}}\" /></p>\n    <p>Option 5<input type=\"text\" name=\"option5\" ngModel=\"{{editData.option5}}\" /></p>\n    <p>Option 6<input type=\"text\" name=\"option6\" ngModel=\"{{editData.option6}}\" /></p>\n    <p>Option 7<input type=\"text\" name=\"option7\" ngModel=\"{{editData.option7}}\" /></p>\n    <p>Correct Answer<input type=\"text\" name=\"correct_answer\" ngModel=\"{{editData.correct_answer}}\" /></p>\n    <p>Total Mark<input type=\"text\" name=\"total_mark\" ngModel=\"{{editData.total_mark}}\" /></p>\n    <p>Priority <input type=\"text\" name=\"priority\" ngModel=\"{{editData.priority}}\" /></p>\n    <p>Hide <input type=\"text\" name=\"hide\" ngModel=\"{{editData.hide}}\" /></p>\n\n    <p>\n        <button type=\"submit\" class=\"btn btn-outline-primary mr-2\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancelEdits()\">Cancel</button>\n    </p>\n</form>\n\n<form *ngIf=\"newForm\" #myform = \"ngForm\" (ngSubmit) = \"saveData(myform)\">\n    <h2>Add New Question</h2>\n    <p>Quiz ID <input type=\"text\" name=\"quiz_id\" ngModel=\"{{quiz_id}}\" readonly/></p>\n    <p>Question <input type=\"text\" name=\"question\" ngModel/></p>\n    <p>Options <input type=\"text\" name=\"options\" ngModel /></p>\n    <p>Option 1<input type=\"text\" name=\"option1\" ngModel /></p>\n    <p>Option 2<input type=\"text\" name=\"option2\" ngModel /></p>\n    <p>Option 3<input type=\"text\" name=\"option3\" ngModel /></p>\n    <p>Option 4<input type=\"text\" name=\"option4\" ngModel /></p>\n    <p>Option 5<input type=\"text\" name=\"option5\" ngModel /></p>\n    <p>Option 6<input type=\"text\" name=\"option6\" ngModel /></p>\n    <p>Option 7<input type=\"text\" name=\"option7\" ngModel /></p>\n    <p>Correct Answer<input type=\"text\" name=\"correct_answer\" ngModel /></p>\n    <p>Total Mark<input type=\"text\" name=\"total_mark\" ngModel/></p>\n    <p>Priority <input type=\"text\" name=\"priority\" ngModel  /></p>\n    <p>Hide <input type=\"text\" name=\"hide\" ngModel /></p>\n\n    <p>\n        <button type=\"submit\" class=\"btn btn-outline-primary mr-2\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancelNew()\">Cancel</button>\n    </p>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<button class=\"back btn btn-outline-info\" (click)=\"redirectBack()\">Back</button>\n<button class=\" add btn btn-outline-success\" (click)=\"showAddForm()\"><i class=\"fa fa-plus\"></i></button>\n<h4>Quiz Data</h4>\n<table class=\"table table-bordered table-striped table-hover\">\n    <thead>\n        <tr>\n            <th class=\"text-center\">Topic ID</th>\n            <th class=\"text-center\">Quiz ID</th>\n            <th class=\"text-center\">Quiz Total Marks</th>\n            <th class=\"text-center\">Total Marks</th>\n            <th class=\"text-center\">Quiz name</th>\n            <th class=\"text-center\">Quiz Description</th>\n            <th class=\"text-center\">Priority</th>\n            \n            <th class=\"text-center\">Hide</th>\n            <th class=\"text-center\">Action</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let n of quiz\">\n            <td>{{ n.topic_id }}</td>\n            <td>{{ n.quiz_id }}</td>\n            <td>{{ n.quiz_total_question }}</td>\n            <td>{{ n.total_marks }}</td>\n            <td>{{ n.quiz_name }}</td>\n            <td>{{ n.quiz_description }}</td>\n            \n            <td>{{ n.priority }}</td>\n            <td>{{ n.hide }}</td>\n\n            <td>\n                <button class=\"btn btn-outline-info mr-2\" (click)=\"showEditForm(n)\">\n                    <i class=\"fa fa-edit\"></i>\n                </button>\n                <button class=\"btn btn-outline-danger\" (click)=\"removeData(n)\">\n                    <i class=\"fa fa-minus\"></i>\n                </button>\n                <br>\n                <a class=\"btn btn-outline-dark lecture_btn\" [routerLink] = \"['/course', course_id, 'subject', subject_id, 'topic', n.topic_id, 'quiz', n.quiz_id, 'questions']\">View Questions</a>\n                <a class=\"btn btn-outline-dark lecture_btn\" [routerLink] = \"['/course', course_id, 'subject', subject_id, 'topic', n.topic_id, 'quiz', n.quiz_id, 'userquiz']\">View User's Answers</a>\n\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<br />\n\n<form *ngIf=\"editForm\"  #myform2 = \"ngForm\" (ngSubmit) = \"updateNotes(myform2)\">\n    <h2>Edit Notes Details</h2>\n    <p>Topic ID <input type=\"text\" name=\"topic_id\" ngModel=\"{{editQuiz.topic_id}}\" readonly/></p>\n    <p>Quiz ID <input type=\"text\" name=\"quiz_id\" ngModel=\"{{editQuiz.quiz_id}}\" readonly/></p>\n    <p>Quiz Total Question <input type=\"text\" name=\"quiz_total_question\" ngModel=\"{{editQuiz.quiz_total_question}}\" /></p>\n    <p>Total Marks <input type=\"text\" name=\"total_marks\" ngModel=\"{{editQuiz.total_marks}}\" /></p>\n    <p>Quiz Name<input type=\"text\" name=\"quiz_name\" ngModel=\"{{editQuiz.quiz_name}}\" /></p>\n    <p>Quiz Description <input type=\"text\" name=\"quiz_description\" ngModel=\"{{editQuiz.quiz_description}}\" /></p>\n    \n    <p>Priority <input type=\"text\" name=\"priority\" ngModel=\"{{editQuiz.priority}}\" /></p>\n    <p>Hide <input type=\"text\" name=\"hide\" ngModel=\"{{editQuiz.hide}}\" /></p>\n\n    <p>\n        <button type=\"submit\" class=\"btn btn-outline-primary mr-2\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancelEdits()\">Cancel</button>\n    </p>\n</form>\n\n<form *ngIf=\"newForm\" #myform = \"ngForm\" (ngSubmit) = \"saveNotes(myform)\">\n    <h2>Add New Course</h2>\n    <p>Topic ID <input type=\"text\" name=\"topic_id\" ngModel=\"{{topic_id}}\"  readonly/></p>\n    <p>Quiz Name <input type=\"text\" name=\"quiz_name\" ngModel required/></p>\n    <p>Quiz Description<input type=\"text\" name=\"quiz_description\" ngModel/></p>\n    <p>Total Marks <input type=\"text\" name=\"total_marks\" ngModel/></p>\n    <p>Quiz Total Marks<input type=\"text\" name=\"quiz_total_question\" ngModel/></p>\n    \n    <p>Priority <input type=\"text\" name=\"priority\" ngModel/></p>\n    <p>Hide <input type=\"text\" name=\"hide\" ngModel/></p>\n\n    <p>\n        <button type=\"submit\" class=\"btn btn-outline-primary mr-2\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancelNewData()\">Cancel</button>\n    </p>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"back btn btn-outline-info\" (click)=\"redirectBack()\">Back</button>\n<button class=\"add btn btn-outline-success\" (click)=\"showAddSubjectForm()\"><i class=\"fa fa-plus\"></i></button>\n\n<h4>Subject Data</h4>\n<table class=\"table table-bordered table-striped table-hover\">\n    <thead>\n        <tr>\n            <th class=\"text-center\">Course ID</th>\n            <th class=\"text-center\">Subject ID</th>\n            <th class=\"text-center\">Subject Name</th>\n            <th class=\"text-center\">Description</th>\n            <th class=\"text-center\">Priority</th>\n            <th class=\"text-center\">Hide</th>\n            <th class=\"text-center\">Action</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let s of subject\">\n            <td>{{ s.course_id }}</td>\n            <td>{{ s.subject_id }}</td>\n            <td>{{ s.subject_name }}</td>\n            <td>{{ s.description }}</td>\n            <td>{{ s.priority }}</td>\n            <td>{{ s.hide }}</td>\n\n            <td>\n                <button class=\"btn btn-outline-info mr-2\" (click)=\"showEditSubjectForm(s)\">\n                    <i class=\"fa fa-edit\"></i>\n                </button>\n                <button class=\"btn btn-outline-danger\" (click)=\"removeSubject(s)\">\n                    <i class=\"fa fa-minus\"></i>\n                </button>\n                <br>\n                <a class=\"btn btn-outline-dark subject_btn\"  [routerLink] = \"['/course', s.course_id, 'subject', s.subject_id, 'topic']\" >View Topic</a>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<br />\n\n<form *ngIf=\"editForm\"  #myform2 = \"ngForm\" (ngSubmit) = \"updateSubject(myform2)\">\n    <h2>Edit Subject Details</h2>\n    <p>Course ID <input type=\"text\" name=\"course_id\" ngModel=\"{{editSubject.course_id}}\"  readonly/></p>\n    <p>Subject ID <input type=\"text\" name=\"subject_id\" ngModel=\"{{editSubject.subject_id}}\" readonly/></p>\n    <p>Subject Name <input type=\"text\" name=\"subject_name\" ngModel=\"{{editSubject.subject_name}}\" /></p>\n    <p>Description <input type=\"text\" name=\"description\" ngModel=\"{{editSubject.description}}\" /></p>\n    <p>Priority <input type=\"text\" name=\"priority\" ngModel=\"{{editSubject.priority}}\" /></p>\n    <p>Hide <input type=\"text\" name=\"hide\" ngModel=\"{{editSubject.hide}}\" /></p>\n\n    <p>\n        <button type=\"submit\" class=\"btn btn-outline-primary mr-2\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancelEdits()\">Cancel</button>\n    </p>\n</form>\n\n<form *ngIf=\"newSubjectForm\" #myform = \"ngForm\" (ngSubmit) = \"saveSubject(myform)\">\n    <h2>Add New Subject</h2>\n    <p>Course ID <input type=\"text\" name=\"course_id\" ngModel=\"{{course_id}}\" readonly/></p>\n    <p>Subject Name <input type=\"text\" name=\"subject_name\" required ngModel/></p>\n    <p>Description <input type=\"text\" name=\"description\" ngModel/></p>\n    <p>Priority <input type=\"text\" name=\"priority\" ngModel/></p>\n    <p>Hide <input type=\"text\" name=\"hide\" ngModel/></p>\n\n    <p>\n        \n        <button type=\"submit\" class=\"btn btn-outline-primary mr-2\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancelNewSubject()\">Cancel</button>\n    </p>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/topic/topic.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topic/topic.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<button class=\"back btn btn-outline-info\" (click)=\"redirectBack()\">Back</button>\n<button class=\" add btn btn-outline-success\" (click)=\"showAddForm()\"><i class=\"fa fa-plus\"></i></button>\n\n<h4>Topic Data</h4>\n<table class=\"table table-bordered table-striped table-hover\">\n    <thead>\n        <tr>\n            <th class=\"text-center\">Subject ID</th>\n            <th class=\"text-center\">Topic ID</th>\n            <th class=\"text-center\">Topic Name</th>\n            <th class=\"text-center\">Description</th>\n            <th class=\"text-center\">Subscription</th>\n            <th class=\"text-center\">Priority</th>\n            <th class=\"text-center\">Hide</th>\n            <th class=\"text-center\">Action</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let l of topic\">\n            <td>{{ l.subject_id }}</td>\n            <td>{{ l.topic_id }}</td>\n            <td>{{ l.topic_name }}</td>\n            <td>{{ l.description }}</td>\n            <td>{{ l.subscription }}</td>\n            <td>{{ l.priority }}</td>\n            <td>{{ l.hide }}</td>\n\n            <td>\n                <button class=\"btn btn-outline-info mr-2\" (click)=\"showEditForm(l)\">\n                    <i class=\"fa fa-edit\"></i>\n                </button>\n                <button class=\"btn btn-outline-danger\" (click)=\"removeData(l)\">\n                    <i class=\"fa fa-minus\"></i>\n                </button>\n                <br>\n                <a class=\"btn btn-outline-dark lecture_btn\" [routerLink] = \"['/course', course_id, 'subject', subject_id, 'topic', l.topic_id, 'notes']\">View Notes</a>\n                <a class=\"btn btn-outline-dark lecture_btn\" [routerLink] = \"['/course', course_id, 'subject', subject_id, 'topic', l.topic_id, 'lecture']\">View Lecture</a>\n                <a class=\"btn btn-outline-dark lecture_btn\" [routerLink] = \"['/course', course_id, 'subject', subject_id, 'topic', l.topic_id, 'quiz']\">View quiz</a>\n                \n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<br />\n\n<form *ngIf=\"editForm\"  #myform2 = \"ngForm\" (ngSubmit) = \"updateData(myform2)\">\n    <h2>Edit Topic Details</h2>\n    <p>Subject ID <input type=\"text\" name=\"subject_id\" ngModel=\"{{editData.subject_id}}\"  readonly/></p>\n    <p>Topic ID <input type=\"text\" name=\"topic_id\" ngModel=\"{{editData.topic_id}}\" readonly/></p>\n    <p>Topic Name <input type=\"text\" name=\"topic_name\" ngModel=\"{{editData.topic_name}}\" /></p>\n    <p>Description <input type=\"text\" name=\"description\" ngModel=\"{{editData.description}}\" /></p>\n    <p>Subscription <input type=\"text\" name=\"subscription\" ngModel=\"{{editData.subscription}}\" /></p>\n    <p>Priority <input type=\"text\" name=\"priority\" ngModel=\"{{editData.priority}}\" /></p>\n    <p>Hide <input type=\"text\" name=\"hide\" ngModel=\"{{editData.hide}}\" /></p>\n\n    <p>\n        <button type=\"submit\" class=\"btn btn-outline-primary mr-2\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancelEdits()\">Cancel</button>\n    </p>\n</form>\n\n<form *ngIf=\"newForm\" #myform = \"ngForm\" (ngSubmit) = \"saveData(myform)\">\n    <h2>Add New Course</h2>\n    <p>Subject ID <input type=\"text\" name=\"subject_id\" ngModel=\"{{subject_id}}\"  readonly/></p>\n    <p>Topic Name <input type=\"text\" name=\"topic_name\" ngModel required/></p>\n    <p>Description <input type=\"text\" name=\"description\" ngModel/></p>\n    <p>Subscription<input type=\"text\" name=\"subscription\" ngModel/></p>\n    <p>Priority <input type=\"text\" name=\"priority\" ngModel/></p>\n    <p>Hide <input type=\"text\" name=\"hide\" ngModel/></p>\n\n    <p>\n        <button type=\"submit\" class=\"btn btn-outline-primary mr-2\">Submit</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"cancelNewData()\">Cancel</button>\n    </p>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userquiz/userquiz.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userquiz/userquiz.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<button class=\"back btn btn-outline-info\" (click)=\"redirectBack()\">Back</button>\n<h4>User Detail for Quiz</h4>\n<table class=\"table table-bordered table-striped table-hover\">\n    <thead>\n        <tr>\n            <th class=\"text-center\">User ID</th>\n            <th class=\"text-center\">Username</th>\n            <th class=\"text-center\">Email</th>\n            <th class=\"text-center\">Action</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let n of users\">\n            <td>{{ n.user_id }}</td>\n            <td>{{ n.username }}</td>\n            <td>{{ n.email }}</td>\n            <td>\n                <a class=\"btn btn-outline-dark lecture_btn\" [routerLink] = \"['/course', course_id, 'subject', subject_id, 'topic', topic_id, 'quiz', quiz_id, 'userquiz', n.user_id, 'answers']\">View User's Answers</a>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userquizanswer/userquizanswer.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userquizanswer/userquizanswer.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<button class=\"back btn btn-outline-info\" (click)=\"redirectBack()\">Back</button>\n<h4>User Answer Detail for Quiz</h4>\n<table class=\"table table-bordered table-striped table-hover\">\n    <thead>\n        <tr>\n            <th class=\"text-center\">Answer ID</th>\n            <th class=\"text-center\">Question ID</th>\n            <th class=\"text-center\">Quiz ID</th>\n            <th class=\"text-center\">User ID</th>\n            <th class=\"text-center\">User Ans</th>\n            <th class=\"text-center\">Correct Ans</th>\n            <th class=\"text-center\">Mark Gain</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let n of answers\">\n            <td>{{ n.user_id }}</td>\n            <td>{{ n.question_id }}</td>\n            <td>{{ n.quiz_id }}</td>\n            <td>{{ n.user_id }}</td>\n            <td>{{ n.user_ans }}</td>\n            <td>{{ n.correct }}</td>\n            <td>{{ n.mark_gain }}</td>\n        </tr>\n    </tbody>\n</table>\n\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

const __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

const __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _lecture_lecture_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lecture/lecture.component */ "./src/app/lecture/lecture.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topic/topic.component */ "./src/app/topic/topic.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _userquiz_userquiz_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userquiz/userquiz.component */ "./src/app/userquiz/userquiz.component.ts");
/* harmony import */ var _userquizanswer_userquizanswer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userquizanswer/userquizanswer.component */ "./src/app/userquizanswer/userquizanswer.component.ts");












const routes = [
    { path: 'course', component: _course_course_component__WEBPACK_IMPORTED_MODULE_3__["CourseComponent"] },
    { path: 'course/:id/subject', component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_4__["SubjectComponent"] },
    { path: 'course/:id/subject/:subject_id/topic', component: _topic_topic_component__WEBPACK_IMPORTED_MODULE_7__["TopicComponent"] },
    { path: 'course/:id/subject/:subject_id/topic/:topic_id/notes', component: _notes_notes_component__WEBPACK_IMPORTED_MODULE_6__["NotesComponent"] },
    { path: 'course/:id/subject/:subject_id/topic/:topic_id/lecture', component: _lecture_lecture_component__WEBPACK_IMPORTED_MODULE_5__["LectureComponent"] },
    { path: 'course/:id/subject/:subject_id/topic/:topic_id/quiz', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"] },
    { path: 'course/:id/subject/:subject_id/topic/:topic_id/quiz/:quiz_id/questions', component: _question_question_component__WEBPACK_IMPORTED_MODULE_9__["QuestionComponent"] },
    { path: 'course/:id/subject/:subject_id/topic/:topic_id/quiz/:quiz_id/userquiz', component: _userquiz_userquiz_component__WEBPACK_IMPORTED_MODULE_10__["UserquizComponent"] },
    { path: 'course/:id/subject/:subject_id/topic/:topic_id/quiz/:quiz_id/userquiz/:user_id/answers', component: _userquizanswer_userquizanswer_component__WEBPACK_IMPORTED_MODULE_11__["UserquizanswerComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\r\n    text-align: center;\r\nmargin: 20px;\r\n}\r\nul{\r\n    margin: 5px auto;\r\n}\r\nli{\r\n    margin: 5px 10px;\r\n}\r\n.navbar-brand{\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIsWUFBWTtBQUNaO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbm1hcmdpbjogMjBweDtcclxufVxyXG51bHtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxubGl7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4O1xyXG59XHJcbi5uYXZiYXItYnJhbmR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'examerly-admin';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _lecture_lecture_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lecture/lecture.component */ "./src/app/lecture/lecture.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./topic/topic.component */ "./src/app/topic/topic.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _userquiz_userquiz_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./userquiz/userquiz.component */ "./src/app/userquiz/userquiz.component.ts");
/* harmony import */ var _userquizanswer_userquizanswer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./userquizanswer/userquizanswer.component */ "./src/app/userquizanswer/userquizanswer.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _course_course_component__WEBPACK_IMPORTED_MODULE_6__["CourseComponent"],
            _subject_subject_component__WEBPACK_IMPORTED_MODULE_8__["SubjectComponent"],
            _lecture_lecture_component__WEBPACK_IMPORTED_MODULE_9__["LectureComponent"],
            _notes_notes_component__WEBPACK_IMPORTED_MODULE_10__["NotesComponent"],
            _topic_topic_component__WEBPACK_IMPORTED_MODULE_13__["TopicComponent"],
            _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_14__["QuizComponent"],
            _question_question_component__WEBPACK_IMPORTED_MODULE_15__["QuestionComponent"],
            _userquiz_userquiz_component__WEBPACK_IMPORTED_MODULE_16__["UserquizComponent"],
            _userquizanswer_userquizanswer_component__WEBPACK_IMPORTED_MODULE_17__["UserquizanswerComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot()
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subject_btn{\r\n    margin: 10px 0;\r\n}\r\n.add{\r\n    margin-bottom: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlL2NvdXJzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY291cnNlL2NvdXJzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YmplY3RfYnRue1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuLmFkZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let CourseComponent = class CourseComponent {
    constructor(http, courseService, toastr) {
        this.http = http;
        this.courseService = courseService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.editForm = false;
        this.newCourseForm = false;
        this.editCourse = null;
        this.getCourses();
    }
    getCourses() {
        this.courseService.getUsersFromData().subscribe(res => {
            this.course = res;
            console.log(res);
        });
    }
    showEditCourseForm(course) {
        this.editForm = true;
        this.editCourse = course;
        this.newCourseForm = false;
    }
    showAddCourseForm() {
        this.editCourse = null;
        this.editForm = false;
        this.newCourseForm = true;
    }
    saveCourse(form) {
        this.courseService.newCourse(form.value).subscribe(data => {
            if (data.status == 200) {
                this.newCourseForm = false;
                this.toastr.success('Success', 'Inserted a new entry', { timeOut: 3000 });
                this.ngOnInit();
            }
            else {
                console.log("Following Error - ");
                console.log(data.body);
                this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
            }
        });
    }
    updateCourse(form) {
        var course_id = form.value.course_id;
        this.courseService.updateCourse(form.value, course_id).subscribe(data => {
            if (data.status == 200) {
                this.editForm = false;
                this.editCourse = null;
                this.toastr.success('Success', 'Course table updated', { timeOut: 3000 });
                this.ngOnInit();
            }
            else {
                console.log("Following Error - ");
                console.log(data.body);
                this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
            }
        });
    }
    removeCourse(course) {
        if (confirm('Are you sure you want to delete this data from the database?')) {
            var course_id = course.course_id;
            this.courseService.deleteCourse(course_id).subscribe(data => {
                if (data.status == 200) {
                    this.cancelEdits();
                    this.cancelNewCourse();
                    this.toastr.success('Success', 'Course Deleted');
                    this.ngOnInit();
                }
                else {
                    console.log("Following Error - ");
                    console.log(data.body);
                    this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
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
};
CourseComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./course.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/course/course.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], CourseComponent);



/***/ }),

/***/ "./src/app/lecture/lecture.component.css":
/*!***********************************************!*\
  !*** ./src/app/lecture/lecture.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lecture_btn{\r\n    margin: 10px 0;\r\n}\r\n\r\n.back{\r\n    margin: 15px 0;\r\n}\r\n\r\n.add{\r\n    margin-left: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVjdHVyZS9sZWN0dXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xlY3R1cmUvbGVjdHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlY3R1cmVfYnRue1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5iYWNre1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuLmFkZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/lecture/lecture.component.ts":
/*!**********************************************!*\
  !*** ./src/app/lecture/lecture.component.ts ***!
  \**********************************************/
/*! exports provided: LectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureComponent", function() { return LectureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_lecture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lecture.service */ "./src/app/services/lecture.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let LectureComponent = class LectureComponent {
    constructor(router, lectureService, route, toastr) {
        this.router = router;
        this.lectureService = lectureService;
        this.route = route;
        this.toastr = toastr;
        this.topic_id = this.route.snapshot.paramMap.get('topic_id');
        this.subject_id = this.route.snapshot.paramMap.get('subject_id');
        this.course_id = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.editForm = false;
        this.newLectureForm = false;
        this.topic_id = this.route.snapshot.paramMap.get('topic_id');
        this.subject_id = this.route.snapshot.paramMap.get('subject_id');
        this.course_id = this.route.snapshot.paramMap.get('id');
        this.getLectures();
    }
    getLectures() {
        this.lectureService.getUsersFromData(this.topic_id).subscribe(res => {
            this.lecture = res;
        });
    }
    showEditLectureForm(editLecture) {
        this.editForm = true;
        this.editLecture = editLecture;
        this.newLectureForm = false;
    }
    showAddLectureForm() {
        this.editForm = false;
        this.newLectureForm = true;
    }
    saveLecture(form) {
        this.lectureService.newLecture(form.value, this.topic_id).subscribe(data => {
            if (data.status == 200) {
                this.newLectureForm = false;
                this.newLecture = null;
                this.toastr.success('Success', 'Inserted a new entry', { timeOut: 3000 });
                this.ngOnInit();
            }
            else {
                console.log("Following Error - ");
                console.log(data.body);
                this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
            }
        });
    }
    updateLecture(form) {
        var lecture_id = form.value.lecture_id;
        this.lectureService.updateLecture(form.value, lecture_id).subscribe(data => {
            if (data.status == 200) {
                this.editForm = false;
                this.editLecture = null;
                this.toastr.success('Success', 'Lecture table updated', { timeOut: 3000 });
                this.ngOnInit();
            }
            else {
                console.log("Following Error - ");
                console.log(data.body);
                this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
            }
        });
    }
    removeLecture(lecture) {
        if (confirm('Are you sure you want to delete this data from the database?')) {
            var lecture_id = lecture.lecture_id;
            this.lectureService.deleteLecture(lecture_id).subscribe(data => {
                if (data.status == 200) {
                    this.cancelEdits();
                    this.cancelNewLecture();
                    this.toastr.success('Success', 'Lecture Deleted', { timeOut: 3000 });
                    this.ngOnInit();
                }
                else {
                    console.log("Following Error - ");
                    console.log(data.body);
                    this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
                }
            });
        }
    }
    cancelEdits() {
        this.editForm = false;
        this.editLecture = null;
    }
    cancelNewLecture() {
        this.newLectureForm = false;
    }
    redirectBack() {
        this.router.navigate(['/course', this.course_id, 'subject', this.subject_id, 'topic']);
    }
};
LectureComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_lecture_service__WEBPACK_IMPORTED_MODULE_2__["LectureService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
LectureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lecture',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lecture.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lecture/lecture.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lecture.component.css */ "./src/app/lecture/lecture.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_lecture_service__WEBPACK_IMPORTED_MODULE_2__["LectureService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], LectureComponent);



/***/ }),

/***/ "./src/app/notes/notes.component.css":
/*!*******************************************!*\
  !*** ./src/app/notes/notes.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back{\r\n    margin: 15px 0;\r\n}\r\n.add{\r\n    margin-left: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja3tcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG59XHJcbi5hZGR7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/notes/notes.component.ts":
/*!******************************************!*\
  !*** ./src/app/notes/notes.component.ts ***!
  \******************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_notes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/notes.service */ "./src/app/services/notes.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let NotesComponent = class NotesComponent {
    constructor(router, notesService, toastr, route) {
        this.router = router;
        this.notesService = notesService;
        this.toastr = toastr;
        this.route = route;
        this.topic_id = this.route.snapshot.paramMap.get('topic_id');
        this.course_id = this.route.snapshot.paramMap.get('id');
        this.subject_id = this.route.snapshot.paramMap.get('subject_id');
    }
    ngOnInit() {
        this.editForm = false;
        this.newNotesForm = false;
        this.getNotes();
    }
    getNotes() {
        this.notesService.getUsersFromData(this.topic_id).subscribe(res => {
            this.notes = res;
        });
    }
    showEditNotesForm(editNotes) {
        this.editForm = true;
        this.editNotes = editNotes;
        this.newNotesForm = false;
    }
    showAddNotesForm() {
        this.editForm = false;
        this.newNotesForm = true;
    }
    saveNotes(form) {
        this.notesService.newNotes(form.value, this.topic_id).subscribe(data => {
            if (data.status == 200) {
                this.newNotesForm = false;
                this.newNotes = null;
                this.toastr.success('Success', 'Inserted a new entry', { timeOut: 3000 });
                this.ngOnInit();
            }
            else {
                console.log("Following Error - ");
                console.log(data.body);
                this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
            }
        });
    }
    updateNotes(form) {
        var notes_id = form.value.notes_id;
        console.log(form.value);
        this.notesService.updateNotes(form.value, notes_id).subscribe(data => {
            if (data.status == 200) {
                this.editForm = false;
                this.editNotes = null;
                this.toastr.success('Success', 'Notes table updated', { timeOut: 3000 });
                this.ngOnInit();
            }
            else {
                console.log("Following Error - ");
                console.log(data.body);
                this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
            }
        });
    }
    removeNotes(notes) {
        if (confirm('Are you sure you want to delete this data from the database?')) {
            var notes_id = notes.notes_id;
            this.notesService.deleteNotes(notes_id).subscribe(data => {
                if (data.status == 200) {
                    this.cancelEdits();
                    this.cancelNewNotes();
                    this.toastr.success('Success', 'Notes Deleted', { timeOut: 3000 });
                    this.ngOnInit();
                }
                else {
                    console.log("Following Error - ");
                    console.log(data.body);
                    this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
                }
            });
        }
    }
    cancelEdits() {
        this.editForm = false;
    }
    cancelNewNotes() {
        this.newNotesForm = false;
    }
    redirectBack() {
        this.router.navigate(['/course', this.course_id, 'subject', this.subject_id, 'topic']);
    }
};
NotesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notes.component.css */ "./src/app/notes/notes.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], NotesComponent);



/***/ }),

/***/ "./src/app/question/question.component.css":
/*!*************************************************!*\
  !*** ./src/app/question/question.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/question/question.component.ts":
/*!************************************************!*\
  !*** ./src/app/question/question.component.ts ***!
  \************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/question.service */ "./src/app/services/question.service.ts");





let QuestionComponent = class QuestionComponent {
    constructor(router, questionService, route, toastr) {
        this.router = router;
        this.questionService = questionService;
        this.route = route;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.editForm = false;
        this.newForm = false;
        this.topic_id = this.route.snapshot.paramMap.get('topic_id');
        this.subject_id = this.route.snapshot.paramMap.get('subject_id');
        this.course_id = this.route.snapshot.paramMap.get('id');
        this.quiz_id = this.route.snapshot.paramMap.get('quiz_id');
        this.getLectures();
    }
    getLectures() {
        this.questionService.getUsersFromData(this.quiz_id).subscribe(res => {
            this.data = res;
        });
    }
    showEditForm(editData) {
        this.editForm = true;
        this.editData = editData;
        this.newForm = false;
    }
    showAddForm() {
        this.editForm = false;
        this.newForm = true;
    }
    saveData(form) {
        this.questionService.newRecord(form.value).subscribe(data => {
            if (data.status == 200) {
                this.newForm = false;
                this.toastr.success('Success', 'Inserted a new entry', { timeOut: 3000 });
                this.ngOnInit();
            }
            else {
                console.log("Following Error - ");
                console.log(data.body);
                this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
            }
        });
    }
    updateData(form) {
        var question_id = form.value.question_id;
        this.questionService.updateRecord(form.value, question_id).subscribe(data => {
            if (data.status == 200) {
                this.editForm = false;
                this.editData = null;
                this.toastr.success('Success', 'Question table updated', { timeOut: 3000 });
                this.ngOnInit();
            }
            else {
                console.log("Following Error - ");
                console.log(data.body);
                this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
            }
        });
    }
    removeData(data) {
        if (confirm('Are you sure you want to delete this data from the database?')) {
            var question_id = data.question_id;
            this.questionService.deleteRecord(question_id).subscribe(data => {
                if (data.status == 200) {
                    this.cancelEdits();
                    this.cancelNew();
                    this.toastr.success('Success', ' Question Deleted', { timeOut: 3000 });
                    this.ngOnInit();
                }
                else {
                    console.log("Following Error - ");
                    console.log(data.body);
                    this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
                }
            });
        }
    }
    cancelEdits() {
        this.editForm = false;
        this.editData = null;
    }
    cancelNew() {
        this.newForm = false;
    }
    redirectBack() {
        this.router.navigate(['/course', this.course_id, 'subject', this.subject_id, 'topic', this.topic_id, 'quiz']);
    }
};
QuestionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question/question.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question.component.css */ "./src/app/question/question.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], QuestionComponent);



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_quiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/quiz.service */ "./src/app/services/quiz.service.ts");





let QuizComponent = class QuizComponent {
    constructor(router, quizService, toastr, route) {
        this.router = router;
        this.quizService = quizService;
        this.toastr = toastr;
        this.route = route;
        this.topic_id = this.route.snapshot.paramMap.get('topic_id');
        this.course_id = this.route.snapshot.paramMap.get('id');
        this.subject_id = this.route.snapshot.paramMap.get('subject_id');
    }
    ngOnInit() {
        this.editForm = false;
        this.newForm = false;
        this.getData();
    }
    getData() {
        this.quizService.getUsersFromData(this.topic_id).subscribe(res => {
            this.quiz = res;
        });
    }
    showEditForm(editQuiz) {
        this.editForm = true;
        this.editQuiz = editQuiz;
        this.newForm = false;
    }
    showAddForm() {
        this.editForm = false;
        this.newForm = true;
    }
    saveNotes(form) {
        this.quizService.newQuiz(form.value, this.topic_id).subscribe(data => {
            if (data.status == 200) {
                this.newForm = false;
                this.editQuiz = null;
                this.toastr.success('Success', 'Inserted a new entry', { timeOut: 3000 });
                this.ngOnInit();
            }
            else {
                console.log("Following Error - ");
                console.log(data.body);
                this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
            }
        });
    }
    updateNotes(form) {
        var quiz_id = form.value.quiz_id;
        console.log(form.value);
        this.quizService.updateQuiz(form.value, quiz_id).subscribe(data => {
            if (data.status == 200) {
                this.editForm = false;
                this.editQuiz = null;
                this.toastr.success('Success', 'Quiz table updated', { timeOut: 3000 });
                this.ngOnInit();
            }
            else {
                console.log("Following Error - ");
                console.log(data.body);
                this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
            }
        });
    }
    removeData(quiz) {
        if (confirm('Are you sure you want to delete this data from the database?')) {
            var quiz_id = quiz.quiz_id;
            this.quizService.deleteQuiz(quiz_id).subscribe(data => {
                if (data.status == 200) {
                    this.cancelEdits();
                    this.cancelNewNotes();
                    this.toastr.success('Success', 'Quiz Deleted', { timeOut: 3000 });
                    this.ngOnInit();
                }
                else {
                    console.log("Following Error - ");
                    console.log(data.body);
                    this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
                }
            });
        }
    }
    cancelEdits() {
        this.editForm = false;
    }
    cancelNewNotes() {
        this.newForm = false;
    }
    redirectBack() {
        this.router.navigate(['/course', this.course_id, 'subject', this.subject_id, 'topic']);
    }
};
QuizComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], QuizComponent);



/***/ }),

/***/ "./src/app/services/course.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/course.service.ts ***!
  \********************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _vault_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vault.service */ "./src/app/services/vault.service.ts");




let CourseService = class CourseService {
    constructor(http, vault) {
        this.http = http;
        this.vault = vault;
    }
    getUsersFromData() {
        return this.http.get(this.vault.apiDomain + '/course/fetch-courses-admin');
    }
    newCourse(data) {
        return this.http.post(this.vault.apiDomain + '/course/insert-course', data, { observe: 'response' });
    }
    updateCourse(data, course_id) {
        return this.http.post(this.vault.apiDomain + '/course/update-course/' + course_id, data, { observe: 'response' });
    }
    deleteCourse(course_id) {
        return this.http.delete(this.vault.apiDomain + '/course/delete-course/' + course_id, { observe: 'response' });
    }
};
CourseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"] }
];
CourseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"]])
], CourseService);



/***/ }),

/***/ "./src/app/services/lecture.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/lecture.service.ts ***!
  \*********************************************/
/*! exports provided: LectureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureService", function() { return LectureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _vault_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vault.service */ "./src/app/services/vault.service.ts");




let LectureService = class LectureService {
    constructor(http, vault) {
        this.http = http;
        this.vault = vault;
    }
    getUsersFromData(topic_id) {
        return this.http.get(this.vault.apiDomain + '/lecture/fetch-lecture-by-topicid-admin/' + topic_id);
    }
    newLecture(data, topic_id) {
        return this.http.post(this.vault.apiDomain + '/lecture/insert-lecture/' + topic_id, data, { observe: 'response' });
    }
    updateLecture(data, lecture_id) {
        return this.http.post(this.vault.apiDomain + '/lecture/update-lecture/' + lecture_id, data, { observe: 'response' });
    }
    deleteLecture(lecture_id) {
        return this.http.delete(this.vault.apiDomain + '/lecture/delete-lecture/' + lecture_id, { observe: 'response' });
    }
};
LectureService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"] }
];
LectureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"]])
], LectureService);



/***/ }),

/***/ "./src/app/services/notes.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/notes.service.ts ***!
  \*******************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _vault_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vault.service */ "./src/app/services/vault.service.ts");




let NotesService = class NotesService {
    constructor(http, vault) {
        this.http = http;
        this.vault = vault;
    }
    getUsersFromData(topic_id) {
        return this.http.get(this.vault.apiDomain + '/notes/fetch-notes-by-topicid-admin/' + topic_id);
    }
    newNotes(data, topic_id) {
        return this.http.post(this.vault.apiDomain + '/notes/insert-notes/' + topic_id, data, { observe: 'response' });
    }
    updateNotes(data, notes_id) {
        return this.http.post(this.vault.apiDomain + '/notes/update-notes/' + notes_id, data, { observe: 'response' });
    }
    deleteNotes(notes_id) {
        return this.http.delete(this.vault.apiDomain + '/notes/delete-notes/' + notes_id, { observe: 'response' });
    }
};
NotesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"] }
];
NotesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"]])
], NotesService);



/***/ }),

/***/ "./src/app/services/question.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/question.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _vault_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vault.service */ "./src/app/services/vault.service.ts");




let QuestionService = class QuestionService {
    constructor(http, vault) {
        this.http = http;
        this.vault = vault;
    }
    getUsersFromData(quiz_id) {
        return this.http.get(this.vault.apiDomain + '/question/fetch-questions-by-quizid-admin/' + quiz_id);
    }
    newRecord(data) {
        return this.http.post(this.vault.apiDomain + '/question/insert-question', data, { observe: 'response' });
    }
    updateRecord(data, question_id) {
        return this.http.post(this.vault.apiDomain + '/question/update-question/' + question_id, data, { observe: 'response' });
    }
    deleteRecord(question_id) {
        return this.http.delete(this.vault.apiDomain + '/question/delete-question/' + question_id, { observe: 'response' });
    }
};
QuestionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"] }
];
QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"]])
], QuestionService);



/***/ }),

/***/ "./src/app/services/quiz.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/quiz.service.ts ***!
  \******************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _vault_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vault.service */ "./src/app/services/vault.service.ts");




let QuizService = class QuizService {
    constructor(http, vault) {
        this.http = http;
        this.vault = vault;
    }
    getUsersFromData(topic_id) {
        return this.http.get(this.vault.apiDomain + '/quiz/fetch-quiz-by-topicid-admin/' + topic_id);
    }
    newQuiz(data, topic_id) {
        return this.http.post(this.vault.apiDomain + '/quiz/insert-quiz/' + topic_id, data, { observe: 'response' });
    }
    updateQuiz(data, quiz_id) {
        return this.http.post(this.vault.apiDomain + '/quiz/update-quiz/' + quiz_id, data, { observe: 'response' });
    }
    deleteQuiz(quiz_id) {
        return this.http.delete(this.vault.apiDomain + '/quiz/delete-quiz-by-quizid/' + quiz_id, { observe: 'response' });
    }
};
QuizService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"] }
];
QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"]])
], QuizService);



/***/ }),

/***/ "./src/app/services/subject.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/subject.service.ts ***!
  \*********************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _vault_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vault.service */ "./src/app/services/vault.service.ts");




let SubjectService = class SubjectService {
    constructor(http, vault) {
        this.http = http;
        this.vault = vault;
    }
    getUsersFromData(course_id) {
        return this.http.get(this.vault.apiDomain + '/subject/fetch-subject-by-courseid-admin/' + course_id);
    }
    newSubject(data, course_id) {
        return this.http.post(this.vault.apiDomain + '/subject/insert-subject/' + course_id, data, { observe: 'response' });
    }
    updateSubject(data, subject_id) {
        return this.http.post(this.vault.apiDomain + '/subject/update-subject/' + subject_id, data, { observe: 'response' });
    }
    deleteSubject(subject_id) {
        return this.http.delete(this.vault.apiDomain + '/subject/delete-subject/' + subject_id, { observe: 'response' });
    }
};
SubjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"] }
];
SubjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"]])
], SubjectService);



/***/ }),

/***/ "./src/app/services/topic.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/topic.service.ts ***!
  \*******************************************/
/*! exports provided: TopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicService", function() { return TopicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _vault_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vault.service */ "./src/app/services/vault.service.ts");




let TopicService = class TopicService {
    constructor(http, vault) {
        this.http = http;
        this.vault = vault;
    }
    getTopics(subject_id) {
        return this.http.get(this.vault.apiDomain + '/topic/fetch-topic-by-subjectid-admin/' + subject_id);
    }
    newTopic(data, subject_id) {
        return this.http.post(this.vault.apiDomain + '/topic/insert-topic/' + subject_id, data, { observe: 'response' });
    }
    updateTopic(data, topic_id) {
        return this.http.post(this.vault.apiDomain + '/topic/update-topic/' + topic_id, data, { observe: 'response' });
    }
    deleteTopic(topic_id) {
        return this.http.delete(this.vault.apiDomain + '/topic/delete-topic/' + topic_id, { observe: 'response' });
    }
};
TopicService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"] }
];
TopicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"]])
], TopicService);



/***/ }),

/***/ "./src/app/services/userquiz.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/userquiz.service.ts ***!
  \**********************************************/
/*! exports provided: UserquizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserquizService", function() { return UserquizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _vault_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vault.service */ "./src/app/services/vault.service.ts");




let UserquizService = class UserquizService {
    constructor(http, vault) {
        this.http = http;
        this.vault = vault;
    }
    getUsersFromQuizAnswers(quiz_id) {
        return this.http.get(this.vault.apiDomain + '/answer/fetch-answer-userid-admin/' + quiz_id);
    }
};
UserquizService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"] }
];
UserquizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"]])
], UserquizService);



/***/ }),

/***/ "./src/app/services/userquizanswer.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/userquizanswer.service.ts ***!
  \****************************************************/
/*! exports provided: UserquizanswerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserquizanswerService", function() { return UserquizanswerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _vault_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vault.service */ "./src/app/services/vault.service.ts");




let UserquizanswerService = class UserquizanswerService {
    constructor(http, vault) {
        this.http = http;
        this.vault = vault;
    }
    getUsersAnswers(quiz_id, user_id) {
        return this.http.get(this.vault.apiDomain + '/answer/fetch-user-answer-by-quiz-admin/' + quiz_id + '/' + user_id);
    }
};
UserquizanswerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"] }
];
UserquizanswerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultService"]])
], UserquizanswerService);



/***/ }),

/***/ "./src/app/services/vault.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/vault.service.ts ***!
  \*******************************************/
/*! exports provided: VaultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultService", function() { return VaultService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VaultService = class VaultService {
    constructor() {
        this.apiDomain = "ec2-13-233-34-80.ap-south-1.compute.amazonaws.com:3000";
        //this.apiDomain = "//localhost:3000"
    }
};
VaultService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VaultService);



/***/ }),

/***/ "./src/app/subject/subject.component.css":
/*!***********************************************!*\
  !*** ./src/app/subject/subject.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subject_btn{\r\n    margin: 10px 0;\r\n}\r\n\r\n.back{\r\n    margin: 15px 0;\r\n}\r\n\r\n.add{\r\n    margin-left: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViamVjdC9zdWJqZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qvc3ViamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YmplY3RfYnRue1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5iYWNre1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuLmFkZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/subject/subject.component.ts":
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let SubjectComponent = class SubjectComponent {
    constructor(router, subjectService, route, toastr) {
        this.router = router;
        this.subjectService = subjectService;
        this.route = route;
        this.toastr = toastr;
        this.course_id = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.editForm = false;
        this.newSubjectForm = false;
        this.course_id = this.route.snapshot.paramMap.get('id');
        this.getSubjects();
    }
    getSubjects() {
        this.subjectService.getUsersFromData(this.course_id).subscribe(res => {
            this.subject = res;
        });
    }
    showEditSubjectForm(editsubject) {
        this.editForm = true;
        this.editSubject = editsubject;
        this.newSubjectForm = false;
    }
    showAddSubjectForm() {
        this.editForm = false;
        this.newSubjectForm = true;
    }
    saveSubject(form) {
        this.subjectService.newSubject(form.value, this.course_id).subscribe(data => {
            if (data.status == 200) {
                this.newSubjectForm = false;
                this.newSubject = null;
                this.toastr.success('Success', 'Inserted a new entry', { timeOut: 3000 });
                this.ngOnInit();
            }
            else {
                console.log("Following Error - ");
                console.log(data.body);
                this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
            }
        });
    }
    updateSubject(form) {
        var subject_id = form.value.subject_id;
        this.subjectService.updateSubject(form.value, subject_id).subscribe(data => {
            if (data.status == 200) {
                this.editForm = false;
                this.editSubject = null;
                this.toastr.success('Success', 'Subject table updated', { timeOut: 3000 });
                this.ngOnInit();
            }
            else {
                console.log("Following Error - ");
                console.log(data.body);
                this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
            }
        });
    }
    removeSubject(subject) {
        if (confirm('Are you sure you want to delete this data from the database?')) {
            var subject_id = subject.subject_id;
            this.subjectService.deleteSubject(subject_id).subscribe(data => {
                if (data.status == 200) {
                    this.cancelEdits();
                    this.cancelNewSubject();
                    this.toastr.success('Success', 'Subject Deleted', { timeOut: 3000 });
                    this.ngOnInit();
                }
                else {
                    console.log("Following Error - ");
                    console.log(data.body);
                    this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
                }
            });
        }
    }
    cancelEdits() {
        this.editForm = false;
    }
    cancelNewSubject() {
        this.newSubjectForm = false;
    }
    redirectBack() {
        this.router.navigate(['/course']);
    }
};
SubjectComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subject',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subject.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subject/subject.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], SubjectComponent);



/***/ }),

/***/ "./src/app/topic/topic.component.css":
/*!*******************************************!*\
  !*** ./src/app/topic/topic.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGljL3RvcGljLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/topic/topic.component.ts":
/*!******************************************!*\
  !*** ./src/app/topic/topic.component.ts ***!
  \******************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_topic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/topic.service */ "./src/app/services/topic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let TopicComponent = class TopicComponent {
    constructor(router, topicService, route, toastr) {
        this.router = router;
        this.topicService = topicService;
        this.route = route;
        this.toastr = toastr;
        this.subject_id = this.route.snapshot.paramMap.get('subject_id');
        this.course_id = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.editForm = false;
        this.newForm = false;
        this.subject_id = this.route.snapshot.paramMap.get('subject_id');
        this.getData();
    }
    getData() {
        this.topicService.getTopics(this.subject_id).subscribe(res => {
            this.topic = res;
        });
    }
    showEditForm(editData) {
        this.editForm = true;
        this.editData = editData;
        this.newForm = false;
    }
    showAddForm() {
        this.editForm = false;
        this.newForm = true;
    }
    saveData(form) {
        this.topicService.newTopic(form.value, this.subject_id).subscribe(data => {
            if (data.status == 200) {
                this.newForm = false;
                this.newData = null;
                this.toastr.success('Success', 'Inserted a new entry', { timeOut: 3000 });
                this.ngOnInit();
            }
            else {
                console.log("Following Error - ");
                console.log(data.body);
                this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
            }
        });
    }
    updateData(form) {
        var topic_id = form.value.topic_id;
        this.topicService.updateTopic(form.value, topic_id).subscribe(data => {
            if (data.status == 200) {
                this.editForm = false;
                this.editData = null;
                this.toastr.success('Success', 'Topic table updated', { timeOut: 3000 });
                this.ngOnInit();
            }
            else {
                console.log("Following Error - ");
                console.log(data.body);
                this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
            }
        });
    }
    removeData(topic) {
        if (confirm('Are you sure you want to delete this data from the database?')) {
            var topic_id = topic.topic_id;
            this.topicService.deleteTopic(topic_id).subscribe(data => {
                if (data.status == 200) {
                    this.cancelEdits();
                    this.cancelNewForm();
                    this.toastr.success('Success', 'Topic Deleted', { timeOut: 3000 });
                    this.ngOnInit();
                }
                else {
                    console.log("Following Error - ");
                    console.log(data.body);
                    this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
                }
            });
        }
    }
    cancelEdits() {
        this.editForm = false;
        this.editData = null;
    }
    cancelNewForm() {
        this.newForm = false;
    }
    redirectBack() {
        this.router.navigate(['/course', this.course_id, 'subject']);
    }
};
TopicComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_topic_service__WEBPACK_IMPORTED_MODULE_2__["TopicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
TopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/topic/topic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topic.component.css */ "./src/app/topic/topic.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_topic_service__WEBPACK_IMPORTED_MODULE_2__["TopicService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], TopicComponent);



/***/ }),

/***/ "./src/app/userquiz/userquiz.component.css":
/*!*************************************************!*\
  !*** ./src/app/userquiz/userquiz.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJxdWl6L3VzZXJxdWl6LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/userquiz/userquiz.component.ts":
/*!************************************************!*\
  !*** ./src/app/userquiz/userquiz.component.ts ***!
  \************************************************/
/*! exports provided: UserquizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserquizComponent", function() { return UserquizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_userquiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/userquiz.service */ "./src/app/services/userquiz.service.ts");




let UserquizComponent = class UserquizComponent {
    constructor(router, userquizService, route) {
        this.router = router;
        this.userquizService = userquizService;
        this.route = route;
        this.topic_id = this.route.snapshot.paramMap.get('topic_id');
        this.course_id = this.route.snapshot.paramMap.get('id');
        this.subject_id = this.route.snapshot.paramMap.get('subject_id');
        this.quiz_id = this.route.snapshot.paramMap.get('quiz_id');
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.userquizService.getUsersFromQuizAnswers(this.quiz_id).subscribe(res => {
            this.users = res;
            console.log(this.users[0]);
        });
    }
    redirectBack() {
        this.router.navigate(['/course', this.course_id, 'subject', this.subject_id, 'topic', this.topic_id, 'quiz']);
    }
};
UserquizComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_userquiz_service__WEBPACK_IMPORTED_MODULE_3__["UserquizService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
UserquizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userquiz',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userquiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userquiz/userquiz.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userquiz.component.css */ "./src/app/userquiz/userquiz.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_userquiz_service__WEBPACK_IMPORTED_MODULE_3__["UserquizService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], UserquizComponent);



/***/ }),

/***/ "./src/app/userquizanswer/userquizanswer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/userquizanswer/userquizanswer.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJxdWl6YW5zd2VyL3VzZXJxdWl6YW5zd2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/userquizanswer/userquizanswer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/userquizanswer/userquizanswer.component.ts ***!
  \************************************************************/
/*! exports provided: UserquizanswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserquizanswerComponent", function() { return UserquizanswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_userquizanswer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/userquizanswer.service */ "./src/app/services/userquizanswer.service.ts");




let UserquizanswerComponent = class UserquizanswerComponent {
    constructor(router, userquizanswerService, route) {
        this.router = router;
        this.userquizanswerService = userquizanswerService;
        this.route = route;
        this.topic_id = this.route.snapshot.paramMap.get('topic_id');
        this.course_id = this.route.snapshot.paramMap.get('id');
        this.subject_id = this.route.snapshot.paramMap.get('subject_id');
        this.quiz_id = this.route.snapshot.paramMap.get('quiz_id');
        this.user_id = this.route.snapshot.paramMap.get('user_id');
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.userquizanswerService.getUsersAnswers(this.quiz_id, this.user_id).subscribe(res => {
            this.answers = res;
        });
    }
    redirectBack() {
        this.router.navigate(['/course', this.course_id, 'subject', this.subject_id, 'topic', this.topic_id, 'quiz', this.quiz_id, 'userquiz']);
    }
};
UserquizanswerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_userquizanswer_service__WEBPACK_IMPORTED_MODULE_3__["UserquizanswerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
UserquizanswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userquizanswer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userquizanswer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userquizanswer/userquizanswer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userquizanswer.component.css */ "./src/app/userquizanswer/userquizanswer.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_userquizanswer_service__WEBPACK_IMPORTED_MODULE_3__["UserquizanswerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], UserquizanswerComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rasengan\Desktop\Projects\examerly-admin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map