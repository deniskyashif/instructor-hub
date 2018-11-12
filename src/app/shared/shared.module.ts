import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubstringPipe } from './pipes/substring.pipe';

const PIPES = [SubstringPipe];

@NgModule({
  declarations: PIPES,
  imports: [
    CommonModule
  ],
  exports: PIPES
})
export class SharedModule { }
