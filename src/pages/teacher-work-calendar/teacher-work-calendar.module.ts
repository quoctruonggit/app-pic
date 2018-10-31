import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherWorkCalendarPage } from './teacher-work-calendar';

@NgModule({
  declarations: [
    TeacherWorkCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherWorkCalendarPage),
  ],
})
export class TeacherWorkCalendarPageModule {}
