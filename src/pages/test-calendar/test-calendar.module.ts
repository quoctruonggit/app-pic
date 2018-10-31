import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestCalendarPage } from './test-calendar';

@NgModule({
  declarations: [
    TestCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(TestCalendarPage),
  ],
})
export class TestCalendarPageModule {}
