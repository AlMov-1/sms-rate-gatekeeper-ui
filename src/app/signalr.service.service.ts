
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { GateKeeperResult } from './models/gatekeeper-result';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection = 
    new signalR.HubConnectionBuilder() 
               .withUrl('https://localhost:44393/notificationHub', {
                 skipNegotiation: true,
                 transport: signalR.HttpTransportType.WebSockets
               }) 
               .build();


  private resultsSubject = new Subject<GateKeeperResult>();
  results$ = this.resultsSubject.asObservable();

  constructor() {
    this.startConnection();
    this.addReceiveNotificationListener();
  }

  private startConnection() {
    this.hubConnection.start()
                      .then(() => console.log('Connection started'))
                      .catch(err => console.log('Error while starting connection: ' + err));
  }

  private addReceiveNotificationListener() {
    this.hubConnection.on('ReceiveNotification', (data: GateKeeperResult) => {
      this.resultsSubject.next(data);
    });
  }
}
