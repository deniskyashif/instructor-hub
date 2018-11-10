import { CourseActionsUnion, CourseActionTypes, ChangeApplicationStatus, GetSuccess } from './course.actions';
import { Course } from '../models/course.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from './../../core/state/app.reducers';
import { ApplicationStatus } from '../models/application';

export interface CoursesState {
  readonly courseList: Course[];
  readonly selectedCourse?: Course;
}

export interface State extends fromRoot.State {
  readonly courses: CoursesState;
}

const initialState: CoursesState = {
  courseList: [],
  selectedCourse: null
};

export function coursesReducer(state: CoursesState = initialState, action: CourseActionsUnion): CoursesState {
  switch (action.type) {
    case CourseActionTypes.GetSuccess:
      return {
        ...state,
        courseList: action.payload
      }
    case CourseActionTypes.CreateSuccess:
      return {
        ...state,
        courseList: [...state.courseList, action.payload]
      };
    case CourseActionTypes.DeleteSuccess:
      return {
        courseList: state.courseList.filter(c => c.id !== action.payload.id),
        selectedCourse: state.selectedCourse.id === action.payload.id ? null : state.selectedCourse
      };
    case CourseActionTypes.ToggleSelected:
      let selected;

      if (!state.selectedCourse || state.selectedCourse.id !== action.payload) {
        selected = state.courseList.find(c => c.id === action.payload);
      }

      return {
        ...state,
        selectedCourse: selected
      };
    case CourseActionTypes.ChangeApplicationStatusSuccess:
      return {
        courseList: state.courseList.map(c => c.id === action.payload.id ? action.payload : c),
        selectedCourse: state.selectedCourse.id === action.payload.id ? action.payload : state.selectedCourse
      };
    default:
      return state;
  }
}

export const getCoursesFeatureState = createFeatureSelector<State, CoursesState>('courses');
export const getCourseList = createSelector(getCoursesFeatureState, s => s.courseList);
export const getSelectedCourse = createSelector(getCoursesFeatureState, c => c.selectedCourse);
