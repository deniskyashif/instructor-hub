import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseBoardComponent } from './containers/course-board/course-board.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { coursesReducer } from './state/courses.reducer';
import { CreateCourseComponent } from './containers/create-course/create-course.component';
import { CreateCourseFormComponent } from './components/create-course-form/create-course-form.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesApiService } from './services/courses.api.service';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './state/courses.effects';
import { CoursesStateService } from './state/courses.state.service';

@NgModule({
  declarations: [
    CourseBoardComponent,
    CourseListComponent,
    CourseDetailsComponent,
    CreateCourseComponent,
    CreateCourseFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CoursesRoutingModule,
    StoreModule.forFeature('courses', coursesReducer),
    EffectsModule.forFeature([CoursesEffects])
  ],
  providers: [
    CoursesApiService,
    CoursesStateService
  ]
})
export class CoursesModule { }
