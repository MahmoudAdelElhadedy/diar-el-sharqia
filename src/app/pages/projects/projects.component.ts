import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { SeoService } from '../../services/seo.service';
import { Project, ProjectCategory } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedCategory = signal<ProjectCategory>('all');
  selectedProject = signal<Project | null>(null);
  activeModalImage = signal<string>('');
  activeLightboxIndex = signal<number>(-1);

  readonly categories: { id: ProjectCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'جميع المشاريع', icon: 'fa-solid fa-border-all' },
    { id: 'contracting', label: 'المقاولات العامة', icon: 'fa-solid fa-helmet-safety' },
    { id: 'real-estate', label: 'التطوير العقاري والتشطيبات', icon: 'fa-solid fa-hotel' },
    { id: 'landscape', label: 'اللاندسكيب وتنسيق الحدائق والتشجير', icon: 'fa-solid fa-tree' }
  ];

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'مشاريعنا وأعمالنا | شركة ديار الشرقية للمقاولات والتطوير واللاندسكيب',
      description: 'استعرض معرض مشاريع شركة ديار الشرقية: المقاولات العامة والإنشاءات، التطوير العقاري والتشطيبات الفاخرة، واللاندسكيب وتنسيق الحدائق والتشجير في مصر.',
      keywords: 'مشاريع ديار الشرقية, مقاولات عامة مصر, تطوير عقاري, تشطيبات فندقية, لاندسكيب وتنسيق حدائق, تشجير كمبوندات, صيانة حدائق, القاهرة الجديدة, العاصمة الإدارية',
      canonicalPath: '/projects',
      ogImage: '/assets/images/hero/AQAR.jpg',
      ogType: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CollectionPage',
            '@id': 'https://diarelsharqia.com/projects#webpage',
            'url': 'https://diarelsharqia.com/projects',
            'name': 'مشاريع وأعمال شركة ديار الشرقية',
            'description': 'معرض متكامل يضم أحدث مشاريع المقاولات العامة، التطوير العقاري والتشطيبات، واللاندسكيب وتنسيق الحدائق والتشجير',
            'inLanguage': 'ar-EG'
          },
          this.seoService.getBreadcrumbSchema([
            { name: 'الرئيسية', url: '/' },
            { name: 'مشاريعنا وأعمالنا', url: '/projects' }
          ]),
          {
            '@type': 'ItemList',
            'itemListElement': this.projectService.getProjects().map((p, index) => ({
              '@type': 'ListItem',
              'position': index + 1,
              'name': p.title,
              'description': p.summary,
              'image': p.imageUrl
            }))
          }
        ]
      }
    });

    this.route.queryParams.subscribe(params => {
      const categoryParam = params['category'];
      if (categoryParam === 'agriculture') {
        this.selectedCategory.set('landscape');
      } else if (categoryParam && ['contracting', 'real-estate', 'landscape'].includes(categoryParam)) {
        this.selectedCategory.set(categoryParam as ProjectCategory);
      }
    });
  }

  get filteredProjects(): Project[] {
    return this.projectService.getProjectsByCategory(this.selectedCategory());
  }

  setCategory(category: ProjectCategory): void {
    this.selectedCategory.set(category);
  }

  openProjectDetails(project: Project): void {
    this.selectedProject.set(project);
    this.activeModalImage.set(project.imageUrl);
    this.activeLightboxIndex.set(-1);
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal(): void {
    this.selectedProject.set(null);
    this.activeLightboxIndex.set(-1);
    document.body.style.overflow = 'auto';
  }

  setModalImage(url: string): void {
    this.activeModalImage.set(url);
  }

  getProjectImages(p: Project): string[] {
    if (!p) return [];
    const images: string[] = [];
    if (p.imageUrl) images.push(p.imageUrl);
    if (p.gallery && p.gallery.length) {
      p.gallery.forEach(img => {
        if (!images.includes(img)) {
          images.push(img);
        }
      });
    }
    return images;
  }

  get currentProjectImages(): string[] {
    const p = this.selectedProject();
    return p ? this.getProjectImages(p) : [];
  }

  currentLightboxImage(): string {
    const idx = this.activeLightboxIndex();
    const imgs = this.currentProjectImages;
    return idx >= 0 && idx < imgs.length ? imgs[idx] : '';
  }

  openLightbox(index: number): void {
    this.activeLightboxIndex.set(index);
  }

  closeLightbox(): void {
    this.activeLightboxIndex.set(-1);
  }

  nextLightboxImage(): void {
    const total = this.currentProjectImages.length;
    if (total > 0) {
      this.activeLightboxIndex.update(curr => (curr + 1) % total);
    }
  }

  prevLightboxImage(): void {
    const total = this.currentProjectImages.length;
    if (total > 0) {
      this.activeLightboxIndex.update(curr => (curr - 1 + total) % total);
    }
  }
}
