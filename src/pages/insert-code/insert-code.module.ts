import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertCodePage } from './insert-code';

@NgModule({
  declarations: [
    InsertCodePage,
  ],
  imports: [
    IonicPageModule.forChild(InsertCodePage),
  ],
})
export class InsertCodePageModule {}
