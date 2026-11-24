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
      badge: 'التشطيبات والتطوير العقارى',
      categoryTag: 'Real Estate & Luxury Finishing',
      title: 'جودة البناء، ودقة التشطيب في مكان واحد.',
      subtitle: 'نبتكر مجتمعات سكنية واستثمارية متكاملة وأرقى حلول التصميم الداخلي والتشطيبات الفندقية والديكورات المعمارية التي تمنح وحدتك لمسة جمالية استثنائية.',
      primaryBtnText: 'استكشف مشاريعنا وتشطيباتنا',
      primaryBtnLink: '/projects',
      secondaryBtnText: 'طلب مقايسة واستشارة',
      secondaryBtnLink: '/contact',
      imageUrl: 'assets/images/hero/slide-real-estate.jpg'
    },
    {
      badge: 'الاعمال الانشائية',
      categoryTag: 'General Contracting',
      title: 'شراكة موثوقة تبدأ من الأساسات وتستمر حتى التسليم النهائي.',
      subtitle: 'نؤمن بأن نجاح أي مشروع إنشائي يبدأ من الثقة والشفافية، لذا نوفر لك متابعة دورية وتقارير هندسية دقيقة في كل خطوة؛ لنضمن تسليم مشروعك مطابقاً لأعلى المواصفات القياسية وفي الموعد المتفق عليه تماماً.',
      primaryBtnText: 'استكشف أعمال المقاولات',
      primaryBtnLink: '/projects',
      secondaryBtnText: 'طلب استشارة هندسية',
      secondaryBtnLink: '/contact',
      imageUrl: 'assets/images/hero/Construction.jpg'
    }
     
  ];

  constructor(
    private projectService: ProjectService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'شركة ديار الشرقية | للمقاولات العامة والتطوير العقاري والتشطيبات',
      description: 'شركة ديار الشرقية رائدة المقاولات العامة والإنشاءات، والتطوير العقاري والتشطيبات الفاخرة في مصر بأعلى معايير الجودة العالمية.',
      keywords: 'ديار الشرقية, شركة ديار الشرقية, مقاولات عامة مصر, تطوير عقاري, تشطيبات فندقية, مقاولات وإنشاءات, أبراج سكنية, القاهرة الجديدة, العاصمة الإدارية',
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
            'description': 'الموقع الرسمي لشركة ديار الشرقية للمقاولات العامة والتطوير العقاري والتشطيبات',
            'inLanguage': 'ar-EG',
            'publisher': { '@id': 'https://diarelsharqia.com/#organization' }
          },
          {
            '@type': ['Organization', 'GeneralContractor', 'RealEstateAgent'],
            '@id': 'https://diarelsharqia.com/#organization',
            'name': 'شركة ديار الشرقية للمقاولات العامة والتطوير العقاري والتشطيبات',
            'alternateName': 'Diar El Sharqia',
            'url': 'https://diarelsharqia.com',
            'logo': 'https://diarelsharqia.com/assets/images/hero/section2Home.jpg',
            'image': 'https://diarelsharqia.com/assets/images/hero/Construction.jpg',
            'description': 'صرح وطني رائد يجمع بين المقاولات العامة والإنشاءات، والتطوير العقاري والتشطيبات الفاخرة في مصر.',
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
