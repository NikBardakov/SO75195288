import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatViewComponent } from './chat-view/chat-view.component';

import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatViewComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
