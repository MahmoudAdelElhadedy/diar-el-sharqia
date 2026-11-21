import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { SeoService } from '../../services/seo.service';
import { Project } from '../../models/project.model';

interface HeroSlide {
  badge: string;
  title: string;
  subtitle: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
  imageUrl: string;
  categoryTag: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlideIndex = signal<number>(0);
  private slideInterval: any;
  featuredProjects: Project[] = [];

  readonly slides: HeroSlide[] = [
    {
      badge: 'التشطيبات والديكورات الفاخرة',
      categoryTag: 'Luxury Finishing & Interior',
      title: 'تشطيبات معمارية راقية تُجسد الفخامة والإتقان',
      subtitle: 'نبتكر أرقى حلول التشطيبات الفندقية والديكورات الداخلية المتكاملة بأحدث المعايير العالمية التي تمنح وحدتك لمسة جمالية استثنائية.',
      primaryBtnText: 'استكشف أعمال التشطيبات',
      primaryBtnLink: '/projects',
      secondaryBtnText: 'طلب مقايسة واستشارة',
      secondaryBtnLink: '/contact',
      imageUrl: '/assets/images/hero/slide-real-estate.jpg'
    },
    {
      badge: 'المقاولات العامة والبنية التحتية',
      categoryTag: 'General Contracting',
      title: 'قوة في التنفيذ ودقة هندسية في بناء المستقبل',
      subtitle: 'تنفيذ أضخم المشروعات الإنشائية بأعلى معايير السلامة المهنية والدقة الهندسية المتطورة.',
      primaryBtnText: 'أعمال المقاولات والإنشاءات',
      primaryBtnLink: '/projects',
      secondaryBtnText: 'طلب استشارة هندسية',
      secondaryBtnLink: '/contact',
      imageUrl: '/assets/images/hero/Construction.jpg'
    },
    {
      badge: 'استصلاح الأراضي الزراعية',
      categoryTag: 'Land Reclamation',
      title: 'نخضّر الصحراء ونبني نهضة زراعية مستدامة',
      subtitle: 'استصلاح وتطوير آلاف الأفدنة الصحراوية باستخدام أحدث تقنيات الري الذكي والطاقة النظيفة دعماً للأمن الغذائي والاقتصاد الوطني.',
      primaryBtnText: 'مشاريع الاستصلاح الزراعي',
      primaryBtnLink: '/projects',
      secondaryBtnText: 'فرص الاستثمار الزراعي',
      secondaryBtnLink: '/contact',
      imageUrl: '/assets/images/hero/fields.jpg'
    }
  ];

  constructor(
    private projectService: ProjectService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'شركة ديار الشرقية | للتطوير العقاري والمقاولات واستصلاح الأراضي',
      description: 'شركة ديار الشرقية رائدة التطوير العقاري الفاخر، المقاولات العامة والإنشاءات، واستصلاح الأراضي الزراعية في مصر بأعلى معايير الجودة العالمية.',
      keywords: 'ديار الشرقية, شركة ديار الشرقية, تطوير عقاري مصر, مقاولات عامة, استصلاح أراضي, تشطيبات فندقية, مقاولات الشرقية, القاهرة الجديدة',
      canonicalPath: '/',
      ogImage: '/assets/images/hero/Construction.jpg',
      ogType: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': 'https://diarelsharqia.com/#website',
            'url': 'https://diarelsharqia.com',
            'name': 'شركة ديار الشرقية',
            'description': 'الموقع الرسمي لشركة ديار الشرقية للتطوير العقاري والمقاولات واستصلاح الأراضي',
            'inLanguage': 'ar-EG',
            'publisher': { '@id': 'https://diarelsharqia.com/#organization' }
          },
          {
            '@type': ['Organization', 'GeneralContractor', 'RealEstateAgent'],
            '@id': 'https://diarelsharqia.com/#organization',
            'name': 'شركة ديار الشرقية للتطوير العقاري والمقاولات العامة واستصلاح الأراضي',
            'alternateName': 'Diar El Sharqia',
            'url': 'https://diarelsharqia.com',
            'logo': 'https://diarelsharqia.com/assets/images/hero/section2Home.jpg',
            'image': 'https://diarelsharqia.com/assets/images/hero/Construction.jpg',
            'description': 'صرح وطني رائد يجمع بين البناء المعماري الفاخر، المقاولات العامة والإنشاءات، واستصلاح وتنمية الأراضي الزراعية في مصر والشرق الأوسط.',
            'telephone': '+201001234567',
            'email': 'info@diarelsharqia.com',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'التجمع الخامس - القاهرة الجديدة / طريق الجامعة - الزقازيق',
              'addressLocality': 'القاهرة والشرقية',
              'addressRegion': 'القاهرة والشرقية',
              'addressCountry': 'EG'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': '30.0276',
              'longitude': '31.4913'
            },
            'openingHoursSpecification': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
              'opens': '09:00',
              'closes': '18:00'
            },
            'sameAs': [
              'https://facebook.com',
              'https://instagram.com',
              'https://linkedin.com'
            ]
          }
        ]
      }
    });

    this.featuredProjects = this.projectService.getFeaturedProjects();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.stopAutoSlide();
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  stopAutoSlide(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  nextSlide(): void {
    this.currentSlideIndex.update(idx => (idx + 1) % this.slides.length);
  }

  prevSlide(): void {
    this.currentSlideIndex.update(idx => (idx - 1 + this.slides.length) % this.slides.length);
  }

  goToSlide(index: number): void {
    this.currentSlideIndex.set(index);
    this.startAutoSlide();
  }
}
