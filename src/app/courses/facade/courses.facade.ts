import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import * as CourseActions from './../state/course.actions';
import * as fromCourses from './../state/courses.reducer';
import { Store, select } from '@ngrx/store';
import { Application, ApplicationStatus } from '../models/application';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesFacade {

  constructor(private store: Store<fromCourses.State>) { }

  load() {
    this.store.dispatch(new CourseActions.Load());
  }

  getCourseList(): Observable<Course[]> {
    return this.store.pipe(select(fromCourses.getCourseList));
  }

  getSelectedCourse(): any {
    return this.store.pipe(select(fromCourses.getSelectedCourse));
  }

  create(course: Course) {
    this.store.dispatch(new CourseActions.Create(course));
  }

  delete(course: Course) {
    this.store.dispatch(new CourseActions.Delete(course));
  }

  search(query: string) {
    this.store.dispatch(new CourseActions.Load(query));
  }

  toggleSelected(courseId: number) {
    this.store.dispatch(new CourseActions.ToggleSelected(courseId));
  }

  updateApplicationStatus(course: Course, app: Application, status: ApplicationStatus) {
    this.store.dispatch(new CourseActions.ChangeApplicationStatus({ course, app, status }));
  }
}
