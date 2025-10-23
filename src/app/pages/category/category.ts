import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EventService, Event } from '../../services/event';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class CategoryComponent implements OnInit {
  categoryName = '';
  events: Event[] = [];

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('name') || 'all';
      const allEvents = this.eventService.getEvents();
      if (this.categoryName.toLowerCase() === 'all') {
        this.events = allEvents;
      } else {
        this.events = allEvents.filter(
          event => event.category.toLowerCase() === this.categoryName.toLowerCase()
        );
      }
    });
  }
}
