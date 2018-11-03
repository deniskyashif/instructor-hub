import { Action } from '@ngrx/store';
import { Course } from '../models/course.model';

export enum CourseActionTypes {
  Create = '[COURSE] Create',
  Delete = '[COURSE] Delete',
  ToggleSelected = '[COURSE] ToggleSelected'
}

export class ToggleSelected implements Action {
  readonly type = CourseActionTypes.ToggleSelected;

  constructor(public payload: number) { }
}

export class Create implements Action {
  readonly type = CourseActionTypes.Create;

  constructor(public payload: Course) { }
}

export class Delete implements Action {
  readonly type = CourseActionTypes.Delete;

  constructor(public payload: Course) { }
}

export type CourseActionsUnion = ToggleSelected | Create | Delete;
