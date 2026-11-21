import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = signal<boolean>(false);
  isSubmittedSuccess = signal<boolean>(false);

  constructor(
    private fb: FormBuilder,
    private seoService: SeoService
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+ ]{10,15}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'تواصل معنا وطلب استشارة | شركة ديار الشرقية',
      description: 'تواصل مع شركة ديار الشرقية للتطوير العقاري والمقاولات واستصلاح الأراضي. احجز استشارتك الهندسية أو اطلب مقايسة أسعار لمشروعك الآن في مصر.',
      keywords: 'تواصل مع ديار الشرقية, هاتف ديار الشرقية, استشارة هندسية, عنوان شركة ديار الشرقية, فرع التجمع الخامس, فرع الزقازيق',
      canonicalPath: '/contact',
      ogImage: '/assets/images/hero/section2Home.jpg',
      ogType: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ContactPage',
            '@id': 'https://diarelsharqia.com/contact#webpage',
            'url': 'https://diarelsharqia.com/contact',
            'name': 'تواصل مع شركة ديار الشرقية',
            'description': 'صفحة التواصل الرسمي وطلب الاستشارات الهندسية لشركة ديار الشرقية',
            'inLanguage': 'ar-EG'
          },
          this.seoService.getBreadcrumbSchema([
            { name: 'الرئيسية', url: '/' },
            { name: 'تواصل معنا', url: '/contact' }
          ])
        ]
      }
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    // Simulate sending message to backend
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmittedSuccess.set(true);
    }, 1200);
  }

  resetForm(): void {
    this.contactForm.reset();
    this.isSubmittedSuccess.set(false);
  }
}
