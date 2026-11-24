import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  readonly milestones = [
    {
      year: '2009',
      title: 'التأسيس والانطلاقة الأولى',
      description: 'تأسست شركة ديار الشرقية للمقاولات العامة والإنشاءات والتشطيبات الفاخرة لتبدأ رحلتها في تشييد المشروعات السكنية  المتطورة.'
    }
    
     
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'عن الشركة ومسيرتنا | شركة ديار الشرقية للمقاولات والتطوير العقاري',
      description: 'تعرف على مسيرة شركة ديار الشرقية، رؤيتنا، رسالتنا، وخبراتنا الرائدة في المقاولات العامة والإنشاءات، والتطوير العقاري والتشطيبات الفاخرة في مصر.',
      keywords: 'عن شركة ديار الشرقية, تاريخ ديار الشرقية, مقاولات عامة مصر, تطوير عقاري, تشطيبات فندقية, رؤية ديار الشرقية, شركة مقاولات',
      canonicalPath: '/about',
      ogImage: '/assets/images/hero/section2Home.jpg',
      ogType: 'article',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'AboutPage',
            '@id': 'https://diarelsharqia.com/about#webpage',
            'url': 'https://diarelsharqia.com/about',
            'name': 'عن شركة ديار الشرقية للمقاولات العامة والتطوير العقاري والتشطيبات',
            'description': 'تاريخ عريق من الريادة في الجمع بين المقاولات العامة والإنشاءات، والتطوير العقاري والتشطيبات الفاخرة',
            'inLanguage': 'ar-EG'
          },
          this.seoService.getBreadcrumbSchema([
            { name: 'الرئيسية', url: '/' },
            { name: 'عن الشركة', url: '/about' }
          ])
        ]
      }
    });
  }
}
