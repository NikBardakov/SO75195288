import { Component, OnInit } from '@angular/core';
import { MessageParsingService } from '../services/MessageParsingService';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  constructor(private messageParsingService: MessageParsingService) { }

  ngOnInit(): void {
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
                      "text": "New message!"
                  }
                 
              ]
          }
      ]
  }
    `
    this.messageParsingService.parseJson(json);
  }
  

}
