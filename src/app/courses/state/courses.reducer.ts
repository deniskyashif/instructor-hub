import { CourseActionsUnion, CourseActionTypes } from './course.actions';
import { Course } from '../models/course.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from './../../core/state/app.reducers';

export interface CoursesState {
  readonly courseList: Course[];
  readonly selectedCourse?: Course;
}

export interface State extends fromRoot.State {
  readonly courses: CoursesState;
}

const initialState: CoursesState = {
  courseList: [
    {
      id: 1,
      title: 'Mongo DB for Administrators',
      description: `We have a client in the UK who is looking for an experienced Mongo DB instructor who can teach a course before Christmas 2018. They request a delivery based on the two 2-day courses "Mongo DB for Administrators"and "Mongo DB for Analysts". Currently this is planned to run over the full 4 days, but it is up for discussion. Also, feel free to include your availability when applying as the dates are not yet fixed.`,
      applications: [
        { instructor: 'John Moss', offeredRate: 100 },
        { instructor: 'Mike Dean', offeredRate: 65 },
        { instructor: 'Amy Fearn', offeredRate: 300 },
        { instructor: 'Micheal Oliver', offeredRate: 200 }
      ]
    },
    {
      id: 2,
      title: 'Neural Networks for Pattern Recognition',
      description: 'Location: Sofia BG',
      applications: [
        { instructor: 'Sian Massey-Ellis', offeredRate: 120 },
      ]
    },
    {
      id: 3,
      title: 'MS Dynamics 365',
      description: `A course on Dynamics 365 requested for Ireland. There is no fixed time frame yet, so the date could depend on the instructor's availability. The course covers provisioning, managing and creating a portal; Liquid operatiors; Web forms. The full course outline is attached to this job and can be downloaded from the link below.`,
      applications: [
        { instructor: 'Phil Dowd', offeredRate: 250 },
        { instructor: 'Mark Clattenburg', offeredRate: 165 }
      ]
    }
  ],
  selectedCourse: null
};

export function coursesReducer(state: CoursesState = initialState, action: CourseActionsUnion): CoursesState {
  switch (action.type) {
    case CourseActionTypes.ToggleSelected:
      let selected;
      if (!state.selectedCourse || state.selectedCourse.id !== action.payload) {
        selected = state.courseList.find(c => c.id === action.payload);
      }
      return {
        courseList: state.courseList,
        selectedCourse: selected
      };
    case CourseActionTypes.Create:
      action.payload.id = state.courseList.length + 1;
      return {
        courseList: [...state.courseList, action.payload],
        selectedCourse: state.selectedCourse
      };
    case CourseActionTypes.Delete:
      return {
        courseList: state.courseList.filter(c => c !== action.payload),
        selectedCourse: state.selectedCourse === action.payload ? null : state.selectedCourse
      };
    default:
      return state;
  }
}

export const getCoursesFeatureState = createFeatureSelector<State, CoursesState>('courses');
export const getCourseList = createSelector(getCoursesFeatureState, s => s.courseList);
export const getSelectedCourse = createSelector(getCoursesFeatureState, c => c.selectedCourse);
