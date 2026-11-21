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
      title: 'دخول قطاع استصلاح الأراضي الزراعية',
      description: 'توسعت الشركة استراتيجياً نحو استصلاح الأراضي الصحراوية في الصالحية ووادي النطرون، وتطبيق أحدث نظم الري المحوري المحوسب.'
    },
    {
      year: '2018',
      title: 'إطلاق ذراع التطوير العقاري الفاخر',
      description: 'بدء تنفيذ كمبوندات سكنية متكاملة وأبراج أعمال إدارية وتجارية في القاهرة الجديدة والمحافظات بمعايير هندسية رفيعة المستوى.'
    },
    {
      year: '2022',
      title: 'المشاركة في المشروعات القومية الكبرى',
      description: 'تنفيذ محاور مرورية كبرى وكباري مسبقة الإجهاد ومحطات طاقة شمسية زراعية بقدرات إنتاجية قياسية.'
    },
    {
      year: '2025 - واليوم',
      title: 'ريادة ثلاثية الأبعاد ونمو مستدام',
      description: 'إدارة واستصلاح أكثر من 50,000 فدان، ومحفظة مشروعات عقارية وإنشائية تتجاوز قيمتها مليارات الجنيهات مع توسع إقليمي مدروس.'
    }
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'عن الشركة وتاريخنا | ديار الشرقية للمقاولات والتطوير',
      description: 'تعرف على تاريخ شركة ديار الشرقية، رؤيتنا، رسالتنا، وإنجازاتنا في التطوير العقاري الفاخر، المقاولات العامة، واستصلاح الأراضي الزراعية في مصر.',
      keywords: 'عن شركة ديار الشرقية, تاريخ ديار الشرقية, مقاولات عامة مصر, استصلاح زراعي مصر, رؤية ديار الشرقية, إنجازات ديار الشرقية',
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
            'name': 'عن شركة ديار الشرقية للتطوير العقاري والمقاولات العامة واستصلاح الأراضي',
            'description': 'تاريخ عريق من الريادة في الجمع بين التطوير العقاري، المقاولات العامة، واستصلاح الأراضي الزراعية',
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
