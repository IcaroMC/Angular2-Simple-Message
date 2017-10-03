import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesAreaComponent } from './messages-area';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessagesAreaComponent
  ],
  exports: [
    MessagesAreaComponent
  ]
})
export class SharedModule { }
