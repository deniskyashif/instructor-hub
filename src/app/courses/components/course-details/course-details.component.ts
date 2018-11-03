import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailsComponent {

  @Input()
  course: Course;

  @Output()
  delete = new EventEmitter<Course>();

  constructor() { }

  onDeleteClick(course: Course) {
    this.delete.emit(course);
  }
}
