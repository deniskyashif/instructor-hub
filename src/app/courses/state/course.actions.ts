import { Action } from '@ngrx/store';
import { Course } from '../models/course.model';
import { Application, ApplicationStatus } from '../models/application';

export enum CourseActionTypes {
  Get = '[COURSE] Get',
  GetSuccess = '[COURSE] GetSuccess',
  Create = '[COURSE] Create',
  CreateSuccess = '[COURSE] CreateSuccess',
  Delete = '[COURSE] Delete',
  DeleteSuccess = '[COURSE] DeleteSuccess',
  ToggleSelected = '[COURSE] ToggleSelected',
  ChangeApplicationStatus = '[COURSE] ChangeApplicationStatus',
  ChangeApplicationStatusSuccess = '[COURSE] ChangeApplicationStatusSuccess'
}

export class Get implements Action {
  readonly type = CourseActionTypes.Get;

  constructor(public payload: string = '') { }
}

export class GetSuccess implements Action {
  readonly type = CourseActionTypes.GetSuccess;

  constructor(public payload: Course[]) { }
}

export class Create implements Action {
  readonly type = CourseActionTypes.Create;

  constructor(public payload: Course) { }
}

export class CreateSuccess implements Action {
  readonly type = CourseActionTypes.CreateSuccess;

  constructor(public payload: Course) { }
}

export class Delete implements Action {
  readonly type = CourseActionTypes.Delete;

  constructor(public payload: Course) { }
}

export class DeleteSuccess implements Action {
  readonly type = CourseActionTypes.DeleteSuccess;

  constructor(public payload: Course) { }
}

export class ToggleSelected implements Action {
  readonly type = CourseActionTypes.ToggleSelected;

  constructor(public payload: number) { }
}

export class ChangeApplicationStatus implements Action {
  readonly type = CourseActionTypes.ChangeApplicationStatus;

  constructor(public payload: { course: Course, app: Application, status: ApplicationStatus }) { }
}

export class ChangeApplicationStatusSuccess implements Action {
  readonly type = CourseActionTypes.ChangeApplicationStatusSuccess;

  constructor(public payload: Course) { }
}

export type CourseActionsUnion = Get |
  GetSuccess |
  Create |
  CreateSuccess |
  Delete |
  DeleteSuccess |
  ToggleSelected |
  ChangeApplicationStatus |
  ChangeApplicationStatusSuccess;
