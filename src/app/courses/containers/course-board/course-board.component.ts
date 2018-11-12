import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../models/course.model';
import { Observable } from 'rxjs';
import { Application, ApplicationStatus } from '../../models/application';
import { CoursesStateService } from '../../state/courses.state.service';

@Component({
  selector: 'app-course-board',
  templateUrl: './course-board.component.html',
  styleUrls: ['./course-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseBoardComponent implements OnInit {

  courses$: Observable<Course[]>;
  selectedCourse$: Observable<Course>;

  constructor(private courses: CoursesStateService) { }

  ngOnInit() {
    this.courses.load();
    this.courses$ = this.courses.getCourseList();
    this.selectedCourse$ = this.courses.getSelectedCourse();
  }

  toggleSelectCourse(course: Course) {
    this.courses.toggleSelected(course.id);
  }

  delete(course: Course) {
    this.courses.delete(course);
  }

  search(query: string) {
    this.courses.search(query);
  }

  updateApplicationStatus(event: {course: Course, app: Application, status: ApplicationStatus}) {
    this.courses.updateApplicationStatus(event.course, event.app, event.status);
  }
}
