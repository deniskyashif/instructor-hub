import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './containers/app.component';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  AppComponent,
  NotFoundComponent,
  NavbarComponent
]

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: COMPONENTS
})
export class CoreModule { }
