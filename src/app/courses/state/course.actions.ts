import { Action } from '@ngrx/store';
import { Course } from '../models/course.model';
import { Application, ApplicationStatus } from '../models/application';

export enum CourseActionTypes {
  Create = '[COURSE] Create',
  Delete = '[COURSE] Delete',
  ToggleSelected = '[COURSE] ToggleSelected',
  ChangeApplicationState = '[COURSE] ChangeApplicationState'
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

export class ChangeApplicationState implements Action {
  readonly type = CourseActionTypes.ChangeApplicationState;

  constructor(public payload: { app: Application, status: ApplicationStatus}) { }
}

export type CourseActionsUnion = ToggleSelected | Create | Delete | ChangeApplicationState;
