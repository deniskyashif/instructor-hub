import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListComponent {

  @Input()
  courses: Course[];

  @Input()
  selectedCourse: Course;

  @Output()
  courseSelect = new EventEmitter<Course>();

  constructor() { }

  onCourseClick(course: Course) {
    this.courseSelect.emit(course);
  }
}
