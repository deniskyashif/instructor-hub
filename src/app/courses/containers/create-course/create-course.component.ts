import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Course } from '../../models/course.model';
import { Router } from '@angular/router';
import { CoursesStateService } from '../../state/courses.state.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {

  constructor(
    private courses: CoursesStateService,
    private router: Router,
    private location: Location) { }

  createCourse(course: Course) {
    this.courses.create(course);
    this.router.navigate(['/courses']);
  }

  navigateBack() {
    this.location.back();
  }
}
