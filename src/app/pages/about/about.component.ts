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
      description: 'تأسست شركة ديار الشرقية للمقاولات العامة والإنشاءات لتبدأ رحلتها في تشييد المشروعات السكنية والبنية التحتية المتطورة.'
    },
    {
      year: '2014',
      title: 'إطلاق قطاع اللاندسكيب وتنسيق الحدائق',
      description: 'توسعت الشركة استراتيجياً نحو تصميم وتنفيذ أعمال اللاندسكيب والتشجير وشبكات الري الأوتوماتيكية للكمبوندات السكنية والمنتجعات الراقية.'
    },
    {
      year: '2018',
      title: 'التطوير العقاري وأعمال التشطيبات الفاخرة',
      description: 'بدء تنفيذ أبراج أعمال إدارية وتجارية وتشطيبات فندقية فاخرة في القاهرة الجديدة بمعايير هندسية وديكورية رفيعة المستوى.'
    },
    {
      year: '2022',
      title: 'المشاركة في المشروعات القومية والتنموية الكبرى',
      description: 'تنفيذ محاور مرورية كبرى وكباري مسبقة الإجهاد، ومجمعات صناعية ولوجستية، ومسطحات خضراء ولاندسكيب مفتوح بمواصفات عالمية.'
    },
    {
      year: '2025 - واليوم',
      title: 'ريادة ثلاثية الأبعاد وتكامل استراتيجي',
      description: 'محفظة متكاملة تجمع بين المقاولات العامة، التطوير العقاري والتشطيبات، ومئات الآلاف من الأمتار المربعة من أعمال اللاندسكيب والتشجير المنجزة بأعلى درجات الإتقان.'
    }
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'عن الشركة ومسيرتنا | شركة ديار الشرقية للمقاولات والتطوير واللاندسكيب',
      description: 'تعرف على تاريخ شركة ديار الشرقية، رؤيتنا، رسالتنا، ومسيرتنا في المقاولات العامة والإنشاءات، التطوير العقاري والتشطيبات، واللاندسكيب وتنسيق الحدائق والتشجير في مصر.',
      keywords: 'عن شركة ديار الشرقية, تاريخ ديار الشرقية, مقاولات عامة مصر, تطوير عقاري, تشطيبات فندقية, لاندسكيب وتنسيق حدائق, تشجير كمبوندات, رؤية ديار الشرقية',
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
            'name': 'عن شركة ديار الشرقية للمقاولات العامة والتطوير العقاري والتشطيبات واللاندسكيب',
            'description': 'تاريخ عريق من الريادة في الجمع بين المقاولات العامة والإنشاءات، التطوير العقاري والتشطيبات، واللاندسكيب وتنسيق الحدائق والتشجير',
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
