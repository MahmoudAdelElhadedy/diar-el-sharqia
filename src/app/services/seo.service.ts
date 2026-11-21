import { Injectable, Inject, RendererFactory2, Renderer2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly baseUrl = 'https://diarelsharqia.com';
  private readonly defaultImage = 'https://diarelsharqia.com/assets/images/hero/section2Home.jpg';
  private renderer: Renderer2;
  private jsonLdScriptElement: HTMLScriptElement | null = null;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  updateSeo(config: SeoConfig): void {
    // 1. Title (50-60 chars target)
    this.titleService.setTitle(config.title);

    // 2. Standard Meta Tags
    this.metaService.updateTag({ name: 'description', content: config.description });
    
    if (config.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    } else {
      this.metaService.updateTag({
        name: 'keywords',
        content: 'ديار الشرقية, شركة ديار الشرقية, تطوير عقاري, مقاولات عامة, استصلاح أراضي, تشطيبات فندقية, بنية تحتية, ري حديث, مصر, الشرقية, القاهرة الجديدة'
      });
    }

    this.metaService.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    });

    this.metaService.updateTag({ name: 'author', content: 'شركة ديار الشرقية' });
    this.metaService.updateTag({ name: 'language', content: 'Arabic' });

    // 3. Canonical URL
    const canonicalUrl = config.canonicalPath 
      ? `${this.baseUrl}${config.canonicalPath.startsWith('/') ? config.canonicalPath : '/' + config.canonicalPath}`
      : this.baseUrl;
    this.setCanonicalUrl(canonicalUrl);

    // 4. Open Graph Tags (Facebook, LinkedIn, WhatsApp)
    let ogImage = this.defaultImage;
    if (config.ogImage) {
      if (config.ogImage.startsWith('http')) {
        ogImage = config.ogImage;
      } else {
        const path = config.ogImage.startsWith('/') ? config.ogImage : '/' + config.ogImage;
        ogImage = `${this.baseUrl}${path}`;
      }
    }
    
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:url', content: canonicalUrl });
    this.metaService.updateTag({ property: 'og:type', content: config.ogType || 'website' });
    this.metaService.updateTag({ property: 'og:image', content: ogImage });
    this.metaService.updateTag({ property: 'og:image:alt', content: config.title });
    this.metaService.updateTag({ property: 'og:site_name', content: 'شركة ديار الشرقية للتطوير العقاري والمقاولات واستصلاح الأراضي' });
    this.metaService.updateTag({ property: 'og:locale', content: 'ar_EG' });

    // 5. Twitter Card Tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: config.title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    this.metaService.updateTag({ name: 'twitter:image', content: ogImage });
    this.metaService.updateTag({ name: 'twitter:image:alt', content: config.title });

    // 6. JSON-LD Structured Data
    if (config.jsonLd) {
      this.setJsonLd(config.jsonLd);
    }
  }

  private setCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'canonical');
      this.renderer.appendChild(this.document.head, link);
    }
    this.renderer.setAttribute(link, 'href', url);
  }

  private setJsonLd(schema: Record<string, any> | Array<Record<string, any>>): void {
    if (!this.jsonLdScriptElement) {
      this.jsonLdScriptElement = this.document.querySelector('script#dynamic-json-ld');
      if (!this.jsonLdScriptElement) {
        this.jsonLdScriptElement = this.renderer.createElement('script');
        if (this.jsonLdScriptElement) {
          this.renderer.setAttribute(this.jsonLdScriptElement, 'type', 'application/ld+json');
          this.renderer.setAttribute(this.jsonLdScriptElement, 'id', 'dynamic-json-ld');
          this.renderer.appendChild(this.document.head, this.jsonLdScriptElement);
        }
      }
    }
    if (this.jsonLdScriptElement) {
      this.renderer.setProperty(this.jsonLdScriptElement, 'textContent', JSON.stringify(schema));
    }
  }

  getBreadcrumbSchema(items: { name: string; url: string }[]): Record<string, any> {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': `${this.baseUrl}${item.url.startsWith('/') ? item.url : '/' + item.url}`
      }))
    };
  }
}
