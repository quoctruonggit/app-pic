import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecoverChangePasswordPage } from './recover-change-password';

@NgModule({
  declarations: [
    RecoverChangePasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(RecoverChangePasswordPage),
  ],
})
export class RecoverChangePasswordPageModule {}
