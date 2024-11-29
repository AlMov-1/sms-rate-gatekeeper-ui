import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalRService  } from './signalr.service.service';
import { GateKeeperResult } from './models/gatekeeper-result';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sms-rate-gatekeeper-ui';
  notifications: GateKeeperResult[] = [];
  filteredNotifications: GateKeeperResult[] = [];
  private resultSubscription: Subscription = new Subscription();
  private filterValue: string = '';

  constructor(private signalRService: SignalRService){}

  ngOnInit(): void { 
    this.resultSubscription = 
      this.signalRService
          .results$
          .subscribe({
            next: data => {
              this.notifications.push(data);
              this.applyFilter();
            },
            error: err => console.error('Error receiving notification:', err)
          });
  }

  ngOnDestroy(): void {
    if (this.resultSubscription) {
        this.resultSubscription.unsubscribe();
    }
  }

  onFilterStatus(event: Event): void { 
    const inputElement = event.target as HTMLInputElement; 
    this.filterValue = inputElement.value; 
    this.applyFilter();
  }

  applyFilter(): void {
    if(this.filterValue){
      this.filteredNotifications = this.notifications
                                       .filter(n => n.number
                                                     .toString()
                                                     .includes(this.filterValue));                                      
    } else {
      this.filteredNotifications = this.notifications;
    }
  }

  clearNotifications() : void {
    this.notifications = [];
    this.filteredNotifications = [];
  }
}