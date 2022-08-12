import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Message } from '../models/Message.model';
import { getDatabase, ref, orderByChild, limitToLast } from "firebase/database";


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messagesRef: AngularFirestoreDocument;
  messages: any;

  constructor(public afs: AngularFirestore) {
    this.messagesRef = this.afs.collection('messages').doc('messages'); // , ref => ref.orderBy('timestamp').limitToLast(5)
    console.log(this.messagesRef.get());
    this.messages = this.messagesRef.valueChanges();
  }
  getMessages(){
    return this.messages;
  }
  addMessage(messages){
    this.messagesRef.update({"messages" : messages})
  }
}
