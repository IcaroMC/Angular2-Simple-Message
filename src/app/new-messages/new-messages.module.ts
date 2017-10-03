import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMessagesComponent } from './new-messages.component';
import { MessageBoxComponent } from './message-box';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    MessageBoxComponent,
    NewMessagesComponent
  ],
  exports: [
    NewMessagesComponent
  ]
})
export class NewMessagesModule { }
