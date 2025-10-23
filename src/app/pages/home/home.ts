import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { EventService, Event } from '../../services/event';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {
  allEvents: Event[] = [];
  filteredEvents: Event[] = [];
  categories: string[] = [];

  searchTerm = '';
  selectedCategory = 'all';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.allEvents = this.eventService.getEvents();
    this.filteredEvents = this.allEvents;
    this.categories = ['all', ...new Set(this.allEvents.map(event => event.category))];
  }

  applyFilters(): void {
    let events = this.allEvents;

    if (this.searchTerm) {
      events = events.filter(event =>
        event.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.selectedCategory !== 'all') {
      events = events.filter(event => event.category === this.selectedCategory);
    }

    this.filteredEvents = events;
  }
}
