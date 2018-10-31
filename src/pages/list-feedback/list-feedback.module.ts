import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListFeedbackPage } from './list-feedback';

@NgModule({
  declarations: [
    ListFeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(ListFeedbackPage),
  ],
})
export class ListFeedbackPageModule {}
