import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseBoardComponent } from './containers/course-board/course-board.component';
import { CreateCourseComponent } from './containers/create-course/create-course.component';

const routes: Routes = [
  {
    path: '',
    component: CourseBoardComponent
  },
  {
    path: 'create',
    component: CreateCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
