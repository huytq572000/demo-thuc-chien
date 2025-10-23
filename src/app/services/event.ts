import { Injectable } from '@angular/core';

export interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [
    {
      id: 1,
      name: 'Đại nhạc hội Mùa Hè',
      date: '2025-11-15T19:00:00',
      location: 'Sân vận động Mỹ Đình, Hà Nội',
      description: 'Sự kiện âm nhạc lớn nhất năm với sự góp mặt của các ngôi sao hàng đầu.',
      imageUrl: 'https://source.unsplash.com/random/800x600?music-concert',
      category: 'Âm nhạc'
    },
    {
      id: 2,
      name: 'Hội thảo Công nghệ AI',
      date: '2025-11-20T09:00:00',
      location: 'Trung tâm Hội nghị Quốc gia, Hà Nội',
      description: 'Khám phá những xu hướng mới nhất về trí tuệ nhân tạo và học máy.',
      imageUrl: 'https://source.unsplash.com/random/800x600?technology-conference',
      category: 'Công nghệ'
    },
    {
      id: 3,
      name: 'Giải chạy Marathon Quốc tế',
      date: '2025-12-05T06:00:00',
      location: 'Hồ Hoàn Kiếm, Hà Nội',
      description: 'Thử thách bản thân với đường chạy marathon chuyên nghiệp.',
      imageUrl: 'https://source.unsplash.com/random/800x600?marathon',
      category: 'Thể thao'
    },
    {
      id: 4,
      name: 'Triển lãm nghệ thuật đương đại',
      date: '2025-12-10T10:00:00',
      location: 'Bảo tàng Mỹ thuật Việt Nam, Hà Nội',
      description: 'Trưng bày các tác phẩm đặc sắc của những nghệ sĩ trẻ tài năng.',
      imageUrl: 'https://source.unsplash.com/random/800x600?art-exhibition',
      category: 'Nghệ thuật'
    }
  ];

  constructor() { }

  getEvents(): Event[] {
    return this.events;
  }

  getEventById(id: number): Event | undefined {
    return this.events.find(event => event.id === id);
  }

  addEvent(event: Omit<Event, 'id'>): void {
    const newEvent: Event = {
      ...event,
      id: this.events.length > 0 ? Math.max(...this.events.map(e => e.id)) + 1 : 1,
    };
    this.events.push(newEvent);
  }

  updateEvent(updatedEvent: Event): void {
    const index = this.events.findIndex(event => event.id === updatedEvent.id);
    if (index !== -1) {
      this.events[index] = updatedEvent;
    }
  }

  deleteEvent(id: number): void {
    const index = this.events.findIndex(event => event.id === id);
    if (index !== -1) {
      this.events.splice(index, 1);
    }
  }
}
