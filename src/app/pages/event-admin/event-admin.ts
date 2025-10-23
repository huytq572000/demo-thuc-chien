import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EventService, Event } from '../../services/event';

@Component({
  selector: 'app-event-admin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './event-admin.html',
  styleUrl: './event-admin.css',
})
export class EventAdminComponent implements OnInit {
  displayedColumns: string[] = ['name', 'date', 'location', 'actions'];
  events: Event[] = [];
  eventForm: FormGroup;
  isEditing = false;
  currentEventId: number | null = null;

  constructor(
    private eventService: EventService,
    private fb: FormBuilder
  ) {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.events = this.eventService.getEvents();
  }

  editEvent(event: Event): void {
    this.isEditing = true;
    this.currentEventId = event.id;
    this.eventForm.patchValue(event);
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.currentEventId = null;
    this.eventForm.reset();
  }

  deleteEvent(id: number): void {
    this.eventService.deleteEvent(id);
    this.loadEvents();
  }

  onSubmit(): void {
    if (this.eventForm.invalid) {
      return;
    }

    if (this.isEditing && this.currentEventId !== null) {
      this.eventService.updateEvent({ id: this.currentEventId, ...this.eventForm.value });
    } else {
      this.eventService.addEvent(this.eventForm.value);
    }
    
    this.loadEvents();
    this.cancelEdit();
  }
}
