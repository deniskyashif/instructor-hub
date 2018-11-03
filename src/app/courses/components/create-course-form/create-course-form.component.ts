import { Component, EventEmitter, Output } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.scss']
})
export class CreateCourseFormComponent {

  @Output()
  create = new EventEmitter<Course>();

  @Output()
  cancel = new EventEmitter<any>();

  constructor() { }

  onCreateClick(title: string, description: string) {
    const course: Course = { id: -1, title, description };
    this.create.emit(course);
  }

  onCancelClick() {
    this.cancel.emit();
  }
}
