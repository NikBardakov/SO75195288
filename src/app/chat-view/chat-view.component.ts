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
  public addMessages() {
    const json = `
    {
      "chats": [
          {
              "contactName": "Test",
              "messages": [
                  {
                      "timestamp": "2022-12-11T17:00:12Z",
                      "id": "35A8984427489ACE786A9F5DFA81E7",
                      "fromMe": true,
                      "type": "text",
                      "text": "Hello!"
                  },
                  {
                      "timestamp": "2022-12-11T21:34:04Z",
                      "id": "009715FBED647B52CD4EA6AE9A7CA4",
                      "fromMe": false,
                      "type": "text",
                      "text": "How are you?"
                  },
                  {
                      "timestamp": "2022-12-11T21:34:23Z",
                      "id": "479AFD522FEC7444991CCA578EDF9F",
                      "fromMe": false,
                      "type": "text",
                      "text": "What are you doing today?"
                  }
              ]
          }
      ]
  }
    `
    this.messageParsingService.parseJson(json);
  }

  ngOnInit(): void {
    console.log('chat view component msgs: ', this.messages);
  }
}