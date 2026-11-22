import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'الرئيسية | شركة ديار الشرقية للمقاولات العامة والتطوير العقاري واللاندسكيب'
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'عن الشركة | شركة ديار الشرقية للمقاولات والتطوير واللاندسكيب'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'مشاريعنا وأعمالنا | ديار الشرقية للمقاولات والتطوير والتشطيبات واللاندسكيب'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'تواصل معنا | شركة ديار الشرقية للمقاولات والتطوير واللاندسكيب'
  },
  { path: '**', redirectTo: '' }
];
