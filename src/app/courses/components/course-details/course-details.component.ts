import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../models/course.model';
import { ApplicationStatus, Application } from '../../models/application';

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

  @Output()
  applicationStatusChange = new EventEmitter<{app: Application, status: ApplicationStatus}>();

  constructor() { }

  onDeleteClick(course: Course) {
    this.delete.emit(course);
  }

  onStatusChange(event, app: Application) {
    this.applicationStatusChange.emit({
      app,
      status: <ApplicationStatus>ApplicationStatus[event.target.value]
    });
  }

  getStatusClassName(status: ApplicationStatus) {
    return {
      Pending: '',
      Accepted: 'accepted',
      Rejected: 'rejected'
    }[status]
  }
}
