import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { CoursesApiService } from "../services/courses.api.service";
import { Get, CourseActionTypes, GetSuccess } from "../state/course.actions";
import { map, exhaustMap } from "rxjs/operators";

@Injectable()
export class CoursesEffects {

  @Effect()
  getCourses$ = this.actions$.pipe(
    ofType<Get>(CourseActionTypes.Get),
    map(action => action.payload),
    exhaustMap((query: string) =>
      this.coursesApi.get(query)
        .pipe(map(courses => new GetSuccess(courses)))));

  constructor(private actions$: Actions, private coursesApi: CoursesApiService) { }
}
