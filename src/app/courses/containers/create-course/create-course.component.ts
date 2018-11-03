import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Course } from '../../models/course.model';
import { Store } from '@ngrx/store';
import * as CourseActions from './../../state/course.actions';
import * as fromCourses from '../../state/courses.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {

  constructor(private store: Store<fromCourses.CoursesState>,
    private router: Router,
    private location: Location) { }

  createCourse(course: Course) {
    this.store.dispatch(new CourseActions.Create(course));
    this.router.navigate(['/courses']);
  }

  navigateBack() {
    this.location.back();
  }
}
