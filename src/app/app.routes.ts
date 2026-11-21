import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'الرئيسية | شركة ديار الشرقية للتطوير العقاري والمقاولات واستصلاح الأراضي'
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'عن الشركة | ديار الشرقية للتطوير العقاري والمقاولات العامة'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'مشاريعنا وأعمالنا | ديار الشرقية للمقاولات والتشطيبات الفاخرة'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'تواصل معنا | شركة ديار الشرقية للتطوير العقاري والمقاولات'
  },
  { path: '**', redirectTo: '' }
];
