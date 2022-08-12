import { Component, OnInit } from '@angular/core';
import { Message } from '../models/Message.model';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-speak',
  templateUrl: './speak.component.html',
  styleUrls: ['./speak.component.scss']
})
export class SpeakComponent implements OnInit {

  messages: any[];
  text : string;
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessages().subscribe(messages => {
      messages = messages.messages
      this.messages = messages.slice(messages.length-5, messages.length);
      console.log(messages)
    })
  }
  sendMessage(text){
    console.log(text.target.value);
    this.messages.push(text.target.value)
    this.messageService.addMessage(this.messages);
    text.target.value = '';
  }

}
