import { EventEmitter, Injectable } from '@angular/core';
import { Message } from '../models/message';
import { ParseEvent } from './ParseEvent';

@Injectable({
  providedIn: 'root'
})
export class MessageParsingService {

  public onParseComplete: EventEmitter<ParseEvent> = new EventEmitter<ParseEvent>();
  
  public messages: Message[];

  constructor() {
    this.messages = [];
  }

  public parseJson(jsonString: string) {
    let jsonObj = JSON.parse(jsonString);
    this.messages = jsonObj.chats[0].messages.map((item: { timestamp: any; fromMe: any; text: any; }) => {
      var msg = {
        timestamp: item.timestamp,
        fromMe: item.fromMe,
        text: item.text,
      }
      this.onParseComplete.emit(new ParseEvent(msg));
      return msg;
    });
    console.log("Messaged parsed by service: " , this.messages);
  }
}