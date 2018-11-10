import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './core/containers/app.component';
import { storeFreeze } from 'ngrx-store-freeze';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    CoreModule,
    AuthModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {metaReducers: [storeFreeze]}),
    StoreDevtoolsModule.instrument({
      name: 'Instructor Hub Store DevTools',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
