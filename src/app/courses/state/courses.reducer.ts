import { CourseActionsUnion, CourseActionTypes, ChangeApplicationState, GetSuccess } from './course.actions';
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
    case CourseActionTypes.ToggleSelected:
      let selected;
      if (!state.selectedCourse || state.selectedCourse.id !== action.payload) {
        selected = state.courseList.find(c => c.id === action.payload);
      }

      return {
        ...state,
        selectedCourse: selected
      };
    case CourseActionTypes.Create:
      const course = {
       ...action.payload,
       id: state.courseList.length + 1
      }

      return {
        ...state,
        courseList: [...state.courseList, course]
      };
    case CourseActionTypes.Delete:
      return {
        courseList: state.courseList.filter(c => c !== action.payload),
        selectedCourse: state.selectedCourse === action.payload ? null : state.selectedCourse
      };
    case CourseActionTypes.ChangeApplicationState:
      const updatedApplications = state.selectedCourse.applications.map(app => {
        if(app === action.payload.app) {
          return {
            ...app,
            status: action.payload.status
          }
        }
        return app;
      });

      const selectedCourse: Course = {
        ...state.selectedCourse,
        applications: updatedApplications
      };

      return {
        ...state,
        selectedCourse: selectedCourse
      };
    default:
      return state;
  }
}

export const getCoursesFeatureState = createFeatureSelector<State, CoursesState>('courses');
export const getCourseList = createSelector(getCoursesFeatureState, s => s.courseList);
export const getSelectedCourse = createSelector(getCoursesFeatureState, c => c.selectedCourse);
