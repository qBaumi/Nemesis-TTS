import { Component, OnInit } from '@angular/core';
import { Message } from '../models/Message.model';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-hear',
  templateUrl: './hear.component.html',
  styleUrls: ['./hear.component.scss']
})
export class HearComponent implements OnInit {
  messages: any[];
  voices: any;
  voice: any;
  utterance: any;

  constructor(public messageService: MessageService) {

  }

  ngOnInit(): void {

    this.messageService.getMessages().subscribe(messages => {

      messages = messages.messages;
      this.messages = messages.slice(messages.length-5, messages.length);

      let lastmessage = messages[messages.length-1]
      this.utterance = new SpeechSynthesisUtterance(lastmessage);
      window.speechSynthesis.cancel();
      setTimeout(() => {
        console.log(this.voice);
        this.voices = window.speechSynthesis.getVoices();
        if(!this.voice){
          this.voice = this.voices[0];
        }
        this.utterance.voice = this.voice;
        window.speechSynthesis.speak(this.utterance);
      }, 15);


    })
  }

  changeVoice(voicename): void{
    this.utterance.voice = this.voices.filter(function(voice) { return voice.name == voicename; })[0];
    this.voice = this.utterance.voice;
    window.speechSynthesis.speak(this.utterance);
  }


}
