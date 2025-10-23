import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAdmin } from './event-admin';

describe('EventAdmin', () => {
  let component: EventAdmin;
  let fixture: ComponentFixture<EventAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
