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
      badge: 'التطوير العقاري والتشطيبات',
      categoryTag: 'Real Estate & Luxury Finishing',
      title: 'صروح معمارية فاخرة من تصميم وتشطيب تجسد الإتقان',
      subtitle: 'نبتكر مجتمعات سكنية واستثمارية متكاملة وأرقى حلول التصميم الداخلي التشطيبات الفندقية والديكورات المعمارية التي تمنح وحدتك لمسة جمالية استثنائية.',
      primaryBtnText: 'استكشف مشاريعنا وتشطيباتنا',
      primaryBtnLink: '/projects',
      secondaryBtnText: 'طلب مقايسة واستشارة',
      secondaryBtnLink: '/contact',
      imageUrl: 'assets/images/hero/slide-real-estate.jpg'
    },
    {
      badge: 'المقاولات العامة والإنشاءات',
      categoryTag: 'General Contracting',
      title: ' تنفيذ المشروعات الإنشائية  ',
      subtitle: 'تنفيذ  المشروعات  بأعلى معايير السلامة المهنية والدقة الهندسية .',
      primaryBtnText: 'استكشف أعمال المقاولات',
      primaryBtnLink: '/projects',
      secondaryBtnText: 'طلب استشارة هندسية',
      secondaryBtnLink: '/contact',
      imageUrl: 'assets/images/hero/Construction.jpg'
    },
     
    {
      badge: 'اللاندسكيب وتنسيق الحدائق والتشجير',
      categoryTag: 'Landscaping & Afforestation',
      title: 'تصميم وتنفيذ الحدائق والمسطحات الخضراء',
      subtitle: 'إبداع في تصميم وتنفيذ اعمال اللاندسكيب وتشجير الحدائق  والكمبوندات والفنادق، مع شبكات ري أوتوماتيكية ذكية وعقود صيانة مستدامة.',
      primaryBtnText: 'استكشف أعمال اللاندسكيب',
      primaryBtnLink: '/projects',
      secondaryBtnText: 'تواصل مع خبراء اللاندسكيب',
      secondaryBtnLink: '/contact',
      imageUrl: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1920&q=85'
    }
  ];

  constructor(
    private projectService: ProjectService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'شركة ديار الشرقية | للمقاولات العامة والتطوير العقاري والتشطيبات واللاندسكيب',
      description: 'شركة ديار الشرقية رائدة المقاولات العامة والإنشاءات، التطوير العقاري والتشطيبات الفاخرة، وأعمال اللاندسكيب وتنسيق الحدائق والتشجير في مصر بأعلى معايير الجودة العالمية.',
      keywords: 'ديار الشرقية, شركة ديار الشرقية, مقاولات عامة مصر, تطوير عقاري, تشطيبات فندقية, لاندسكيب وتنسيق حدائق, تشجير كمبوندات, صيانة مسطحات خضراء, القاهرة الجديدة, العاصمة الإدارية',
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
            'description': 'الموقع الرسمي لشركة ديار الشرقية للمقاولات العامة والتطوير العقاري والتشطيبات واللاندسكيب',
            'inLanguage': 'ar-EG',
            'publisher': { '@id': 'https://diarelsharqia.com/#organization' }
          },
          {
            '@type': ['Organization', 'GeneralContractor', 'RealEstateAgent'],
            '@id': 'https://diarelsharqia.com/#organization',
            'name': 'شركة ديار الشرقية للمقاولات العامة والتطوير العقاري والتشطيبات واللاندسكيب',
            'alternateName': 'Diar El Sharqia',
            'url': 'https://diarelsharqia.com',
            'logo': 'https://diarelsharqia.com/assets/images/hero/section2Home.jpg',
            'image': 'https://diarelsharqia.com/assets/images/hero/Construction.jpg',
            'description': 'صرح وطني رائد يجمع بين المقاولات العامة والإنشاءات، التطوير العقاري والتشطيبات الفاخرة، واللاندسكيب وتنسيق الحدائق والتشجير في مصر.',
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
