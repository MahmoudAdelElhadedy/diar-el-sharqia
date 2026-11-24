import { Injectable } from '@angular/core';
import { Project, ProjectCategory } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly projects: Project[] = [
    // 1. Contracting & Infrastructure Projects (المقاولات العامة)
    {
      id: 'infrastructure-eastern-axis',
      title: 'تطوير محور الشرقية السريع وشبكات الجسور',
      category: 'contracting',
      categoryLabel: 'المقاولات العامة',
      summary: 'تنفيذ أعمال بنية تحتية ثقيلة تشمل جسوراً خرسانية وشبكات تصريف ومحاور مرورية رئيسية.',
      description: 'أحد أهم مشاريع الطرق والجسور في الدلتا؛ قامت ديار الشرقية بتنفيذ 4 جسور خرسانية مسبقة الإجهاد، ورصف 35 كيلومتراً من الطرق السريعة ذات المواصفات الهندسية العالمية، مع تركيب شبكات إنارة حديثة بالطاقة الشمسية وشبكات تصريف أمطار متطورة.',
      location: 'محافظة الشرقية - المحور الإقليمي',
      area: 'طريق بطول 35 كم + 4 جسور',
      year: '2024',
      client: 'الهيئة العامة للطرق والكباري',
      status: 'تم التسليم والافتتاح',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1000&q=80'
      ],
      features: [
        'خرسانة مسبقة الإجهاد عالية المقاومة للأحمال الثقيلة',
        'أنظمة إنارة ذكية تعمل بالطاقة الشمسية الموفرة للطاقة',
        'شبكات متكاملة لتصريف مياه السيول والأمطار',
        'إنجاز المشروع قبل الموعد الزمني التعاقدي بـ 3 أشهر'
      ]
    },
    {
      id: 'industrial-complex-10th',
      title: 'مجمع المصانع والهناجر اللوجستية بالمنطقة الصناعية',
      category: 'contracting',
      categoryLabel: 'المقاولات العامة',
      summary: 'إنشاء هناجر معدنية ومستودعات تخزين مبردة ومباني إدارية ملحقة على أحدث طراز صناعي.',
      description: 'مشروع مقاولات صناعية وبنية تحتية يشمل تشييد 12 هنجراً معدنياً ضخماً بارتفاعات حرة، وأرضيات إيبوكسية مقاومة للمواد الكيماوية، ومحطة معالجة مياه الصرف الصناعي، ومحطة تحويل كهربائي بقدرة 15 ميجاوات.',
      location: 'مدينة العاشر من رمضان - المنطقة الصناعية الثالثة',
      area: '62,000 م²',
      year: '2024',
      client: 'التحالف المصري للتصنيع واللوجستيات',
      status: 'تم التسليم والتشغيل',
      imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'
      ],
      features: [
        'هياكل معدنية عالية المتانة بتصميم هندسي مقاوم للزلازل',
        'أرضيات صناعية عالية التحمل بنظام Super Flat Floor',
        'أنظمة مكافحة حريق متكاملة طبقاً لكود NFPA العالمي',
        'محطات شحن للشاحنات الكهربائية والآليات الثقيلة'
      ]
    },
    {
      id: 'governmental-administrative-complex',
      title: 'مجمع المنشآت والمباني الإدارية المتطورة',
      category: 'contracting',
      categoryLabel: 'المقاولات العامة',
      summary: 'تنفيذ أعمال إنشائية متكاملة لمجمع مباني ومقرات حكومية وإدارية حديثة.',
      description: 'مشروع مقاولات عامة متكامل يشمل تشييد 6 مبانٍ إدارية بارتفاعات متعددة، وتنفيذ أعمال الأساسات العميقة، والهياكل الخرسانية المسلحة، وشبكات المرافق العامة، والأنظمة الكهروميكانيكية الحديثة (MEP).',
      location: 'العاصمة الإدارية الجديدة - الحي الحكومي',
      area: '48,000 م²',
      year: '2025',
      client: 'الهيئة الهندسية للمشروعات القومية',
      status: 'تم التسليم والتشغيل',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80'
      ],
      features: [
        'تنفيذ هياكل خرسانية كودية مقاومة للأحمال والزلازل',
        'أنظمة تكييف مركزي وأنظمة إنذار ومكافحة حريق متقدمة',
        'شبكات كهروميكانيكية ذكية وتحكم مركزي BMS',
        'التزام تام بالمعايير والمواصفات القياسية الهندسية'
      ]
    },

    // 2. Real Estate Development & Finishing Projects (التطوير العقاري والتشطيبات)
    {
      id: 'diar-residence-1',
      title: 'أبراج ديار ريزيدنس الفندقية',
      category: 'real-estate',
      categoryLabel: 'التطوير العقاري والتشطيبات',
      summary: 'أبراج سكنية متكاملة بأحدث أعمال التشطيبات الفندقية العالمية والديكورات المعمارية الراقية في قلب التجمع الخامس.',
      description: 'يمثل مشروع أبراج ديار ريزيدنس الفندقية قمة الفخامة في أعمال التطوير العقاري والتشطيبات المعمارية والديكور الداخلي. تم تنفيذ الأبراج بأحدث أنظمة المنازل الذكية والتشطيبات الفندقية من أجود خامات الرخام والبورسلين المستورد، مع صالات استقبال فندقية فاخرة ومصاعد بانورامية.',
      location: 'القاهرة الجديدة - التجمع الخامس',
      area: '190,000 م²',
      year: '2024',
      client: 'شركة ديار الشرقية للاستثمار العقاري',
      status: 'تم التسليم بنجاح',
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80'
      ],
      features: [
        'أمن وحراسة ذكية 24/7 مع كاميرات مراقبة',
        'تشطيبات فندقية كاملة وخامات رخام إيطالي فاخر',
        'كلوب هاوس ونادٍ صحي ورياضي على أعلى مستوى',
        'بنية تحتية متطورة وشبكات ألياف ضوئية فايبر'
      ]
    },
    {
      id: 'sharqia-business-hub',
      title: 'برج ديار للأعمال والتشطيبات الذكية',
      category: 'real-estate',
      categoryLabel: 'التطوير العقاري والتشطيبات',
      summary: 'برج شاهق للأعمال والوحدات الفندقية بتشطيبات زجاجية ورخامية ذكية وقاعات مؤتمرات فاخرة.',
      description: 'أيقونة معمارية بارتفاع 18 طابقاً تجمع بين التطوير العقاري المتقدم والتشطيبات الذكية. صُمم البرج بأنظمة الطاقة الصديقة للبيئة والواجهات الزجاجية العازلة للصوت والحرارة، موفراً بيئة عمل ديناميكية تواكب كبرى الشركات العالمية.',
      location: 'الزقازيق - طريق الجامعة الرئيسي',
      area: '18,500 م²',
      year: '2025',
      client: 'مجموعة الشرقية الاستثمارية',
      status: 'مرحلة التشطيبات النهائية',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80'
      ],
      features: [
        'مواقف سيارات إلكترونية متعددة الطوابق',
        'واجهات زجاجية مزدوجة معزولة وتقنيات توفير طاقة',
        'قاعات اجتماعات ومؤتمرات مجهزة بتقنيات متقدمة',
        'خدمات فندقية واستقبال راقٍ لكبار الزوار'
      ]
    },
    {
      id: 'andalus-villas',
      title: 'قصور وفيلات الأندلس الفاخرة',
      category: 'real-estate',
      categoryLabel: 'التطوير العقاري والتشطيبات',
      summary: 'مجموعة قصور وفلل سكنية خاصة بتشطيبات كلاسيكية ملكية وتصاميم ديكورية متميزة.',
      description: 'تجسيد حقيقي للأناقة الملكية والتميز في التطوير العقاري وأعمال التشطيبات الفاخرة؛ يضم المشروع 45 قصراً وفيلا فخمة ذات تشطيبات رخامية إيطالية وواجهات حجرية أنيقة، مع تصميم مسابح خاصة ومساحات ترفيهية لكل وحدة.',
      location: 'مدينة الشروق - الحي الدبلوماسي',
      area: '125,000 م²',
      year: '2023',
      client: 'شركة ديار الشرقية للتطوير العقاري',
      status: 'تم التسليم بالكامل',
      imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80'
      ],
      features: [
        'تصميم معماري مستوحى من القصور الأندلسية الراقية',
        'أنظمة منازل ذكية Smart Home متكاملة',
        'مسابح خاصة وتشطيبات خارجية راقية',
        'ضمان إنشائي متكامل ومعتمد'
      ]
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectsByCategory(category: ProjectCategory): Project[] {
    if (category === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === category);
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

  getFeaturedProjects(): Project[] {
    return [this.projects[0], this.projects[1], this.projects[3]];
  }
}
