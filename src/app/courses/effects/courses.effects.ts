import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { CoursesApiService } from "../services/courses.api.service";
import { Load, CourseActionTypes, LoadSuccess, Create, CreateSuccess, DeleteSuccess, ChangeApplicationStatus, ChangeApplicationStatusSuccess } from "../state/course.actions";
import { map, exhaustMap } from "rxjs/operators";

@Injectable()
export class CoursesEffects {

  @Effect()
  get$ = this.actions$.pipe(
    ofType<Load>(CourseActionTypes.Load),
    map(action => action.payload),
    exhaustMap((query: string) =>
      this.coursesApi.get(query)
        .pipe(map(courses => new LoadSuccess(courses)))));

  @Effect()
  create$ = this.actions$.pipe(
    ofType<Create>(CourseActionTypes.Create),
    map(action => action.payload),
    exhaustMap(course =>
      this.coursesApi.create(course)
        .pipe(map(newCourse => new CreateSuccess(newCourse)))));

  @Effect()
  delete$ = this.actions$.pipe(
    ofType<Create>(CourseActionTypes.Delete),
    map(action => action.payload),
    exhaustMap(course =>
      this.coursesApi.delete(course)
        .pipe(map(deletedCourse => new DeleteSuccess(deletedCourse)))));

  @Effect()
  changeApplicationState$ = this.actions$.pipe(
    ofType<ChangeApplicationStatus>(CourseActionTypes.ChangeApplicationStatus),
    map(action => action.payload),
    exhaustMap((payload) =>
      this.coursesApi.changeApplicationState(payload.course, payload.app, payload.status)
        .pipe(map(course => new ChangeApplicationStatusSuccess(course)))));

  constructor(private actions$: Actions, private coursesApi: CoursesApiService) { }
}
