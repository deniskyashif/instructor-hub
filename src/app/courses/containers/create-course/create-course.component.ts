import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Course } from '../../models/course.model';
import { Router } from '@angular/router';
import { CoursesFacade } from '../../facade/courses.facade';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {

  constructor(
    private courses: CoursesFacade,
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
