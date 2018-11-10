import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { ApplicationStatus } from '../models/application';
import { of, merge, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { allCourses } from './data';

let courseList = allCourses;

@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {

  constructor() { }

  get(query: string): Observable<Course[]> {
    const lowerCasedQuery = query.toLowerCase();
    const predicate = (c: Course) =>
      c.title.toLowerCase().indexOf(lowerCasedQuery) > -1 || c.description.toLowerCase().indexOf(lowerCasedQuery) > -1;

    return  of(courseList.filter(predicate)).pipe(delay(500));
  }

  create(course: Course): Observable<Course> {
    course.id = courseList.length + 1;
    courseList.push(course);

    return of(course).pipe(delay(500));
  }

  delete(course: Course): Observable<Course> {
    courseList = courseList.filter(c => c.id !== course.id);
    return of(course).pipe(delay(500));
  }
}
