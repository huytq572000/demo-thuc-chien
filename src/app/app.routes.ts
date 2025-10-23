import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { EventDetailComponent } from './pages/event-detail/event-detail';
import { CategoryComponent } from './pages/category/category';
import { EventAdminComponent } from './pages/event-admin/event-admin';


export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Trang chủ' },
    { path: 'event/:id', component: EventDetailComponent, title: 'Chi tiết sự kiện' },
    { path: 'category/:name', component: CategoryComponent, title: 'Danh mục' },
    { path: 'admin', component: EventAdminComponent, title: 'Quản lý sự kiện' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
