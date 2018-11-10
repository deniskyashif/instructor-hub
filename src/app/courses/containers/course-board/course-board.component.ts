import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../models/course.model';
import { Store, select, createSelector, createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CourseActions from './../../state/course.actions';
import * as fromCourses from '../../state/courses.reducer';
import { Application, ApplicationStatus } from '../../models/application';

@Component({
  selector: 'app-course-board',
  templateUrl: './course-board.component.html',
  styleUrls: ['./course-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseBoardComponent implements OnInit {

  courses$: Observable<Course[]>;
  selectedCourse$: Observable<Course>;

  constructor(private store: Store<fromCourses.State>) { }

  ngOnInit() {
    this.store.dispatch(new CourseActions.Get());
    this.courses$ = this.store.pipe(select(fromCourses.getCourseList));
    this.selectedCourse$ = this.store.pipe(select(fromCourses.getSelectedCourse));
  }

  toggleSelectCourse(course: Course) {
    this.store.dispatch(new CourseActions.ToggleSelected(course.id));
  }

  updateApplicationStatus(event: {app: Application, status: ApplicationStatus}) {
    this.store.dispatch(new CourseActions.ChangeApplicationState(event));
  }

  delete(course: Course) {
    this.store.dispatch(new CourseActions.Delete(course));
  }

  search(query: string) {
    this.store.dispatch(new CourseActions.Get(query));
  }
}
