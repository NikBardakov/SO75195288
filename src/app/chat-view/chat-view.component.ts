import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { MessageParsingService } from '../services/MessageParsingService';
import { ParseEvent } from '../services/ParseEvent';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
  private _serviceSubscription;
  messages: Message[];
 

  constructor(private messageParsingService: MessageParsingService) {
   
    this.messages = [];
    this._serviceSubscription = this.messageParsingService.onParseComplete.subscribe({
      next: (event: ParseEvent) => {
          console.log('Received message from parseEvent', event.message);
          this.messages.push(event.message);
      }
    })  
    
    


  }

  public logMessages(){
    console.log("Log current messages: ", this.messages);
  }
  

  ngOnInit(): void {
    console.log('chat view component msgs: ', this.messages);
  }
}