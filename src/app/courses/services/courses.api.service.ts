import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { ApplicationStatus, Application } from '../models/application';
import { of, merge, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { allCourses } from './data';

let courses = allCourses;

@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {

  constructor() { }

  private baseUrl = '/api/courses';

  get(query: string): Observable<Course[]> {
    const lowerCasedQuery = query.toLowerCase();
    const predicate = (c: Course) =>
      c.title.toLowerCase().indexOf(lowerCasedQuery) > -1 || c.description.toLowerCase().indexOf(lowerCasedQuery) > -1;

    return of(courses.filter(predicate)).pipe(delay(500));
  }

  create(course: Course): Observable<Course> {
    const newCourse = {
      ...course,
      id: courses[courses.length - 1].id + 1
    }

    courses = [...courses, newCourse];

    return of(newCourse).pipe(delay(250));
  }

  delete(course: Course): Observable<Course> {
    courses = courses.filter(c => c.id !== course.id);
    return of(course).pipe(delay(250));
  }

  changeApplicationState(course: Course, application: Application, status: ApplicationStatus): Observable<Course> {
    const updatedApplication = { ...application, status };

    const courseToUpdate = {
      ...(courses.find(c => c.id === course.id)),
      applications: course.applications.map(app => app.id === updatedApplication.id ? updatedApplication : app)
    }

    courses = courses.map(c => c.id === courseToUpdate.id ? courseToUpdate : c);

    return of(courseToUpdate).pipe(delay(250));
  }
}
