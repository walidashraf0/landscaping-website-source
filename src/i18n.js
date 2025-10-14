import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Header
      "header.home": "Home",
      "header.services": "Services",
      "header.portfolio": "Portfolio",
      "header.about": "About",
      "header.contact": "Contact",
      "header.phone": "(555) 123-4567",
      "header.getEstimate": "Get Free Estimate",
      
      // Hero Section
      "hero.title": "Transform Your Outdoor Space",
      "hero.subtitle": "Expert landscaping services to create the garden of your dreams. From design to installation, we bring your vision to life.",
      "hero.cta1": "Get Free Estimate",
      "hero.cta2": "View Our Work",
      
      // Services Section
      "services.title": "Our Services",
      "services.subtitle": "Comprehensive landscaping solutions tailored to your needs",
      "services.landscapeDesign.title": "Landscape Design",
      "services.landscapeDesign.description": "Transform your outdoor space with custom landscape designs tailored to your vision and lifestyle. Our expert designers create beautiful, functional spaces that enhance your property's value.",
      "services.lawnCare.title": "Lawn Care & Maintenance",
      "services.lawnCare.description": "Keep your lawn lush and healthy year-round with our comprehensive maintenance services including mowing, fertilization, aeration, and seasonal care programs.",
      "services.hardscaping.title": "Hardscaping",
      "services.hardscaping.description": "Enhance your outdoor living with stunning patios, walkways, retaining walls, and outdoor kitchens. We use premium materials to create durable, beautiful hardscape features.",
      "services.irrigation.title": "Irrigation Systems",
      "services.irrigation.description": "Efficient, automated irrigation systems designed to keep your landscape healthy while conserving water. Installation, maintenance, and repair services available.",
      "services.learnMore": "Learn More",
      
      // Portfolio Section
      "portfolio.title": "Our Portfolio",
      "portfolio.subtitle": "Explore our recent projects and see the quality of our work",
      "portfolio.residential": "Residential",
      "portfolio.urbanGarden": "Urban Garden",
      "portfolio.commercial": "Commercial",
      "portfolio.beforeAfter": "Before & After",
      "portfolio.modernGarden": "Modern Garden Design",
      "portfolio.smallSpace": "Small Space Transformation",
      "portfolio.summerLandscape": "Summer Landscape",
      "portfolio.lawnRenovation": "Lawn Renovation",
      
      // Why Choose Us Section
      "whyChooseUs.title": "Why Choose Us",
      "whyChooseUs.subtitle": "We're committed to delivering exceptional results that exceed your expectations",
      "whyChooseUs.experience.title": "20+ Years Experience",
      "whyChooseUs.experience.description": "Proven expertise in landscape design and installation",
      "whyChooseUs.team.title": "Expert Team",
      "whyChooseUs.team.description": "Certified professionals dedicated to excellence",
      "whyChooseUs.quality.title": "Quality Guaranteed",
      "whyChooseUs.quality.description": "100% satisfaction guarantee on all projects",
      "whyChooseUs.timely.title": "Timely Completion",
      "whyChooseUs.timely.description": "Projects completed on schedule and within budget",
      
      // Testimonials Section
      "testimonials.title": "What Our Clients Say",
      "testimonials.subtitle": "Don't just take our word for it - hear from our satisfied customers",
      "testimonials.sarah.text": "Absolutely incredible work! They transformed our backyard into a beautiful oasis. The team was professional, punctual, and exceeded our expectations.",
      "testimonials.sarah.name": "Sarah Johnson",
      "testimonials.michael.text": "Best landscaping service in the area. Their attention to detail and creative designs are outstanding. Highly recommend for any landscaping project!",
      "testimonials.michael.name": "Michael Chen",
      "testimonials.emily.text": "From design to completion, the entire process was seamless. Our new patio and garden are exactly what we envisioned. Thank you!",
      "testimonials.emily.name": "Emily Rodriguez",
      
      // Contact Section
      "contact.title": "Get In Touch",
      "contact.subtitle": "Ready to transform your outdoor space? Contact us today for a free estimate",
      "contact.form.name": "Name",
      "contact.form.namePlaceholder": "Your name",
      "contact.form.email": "Email",
      "contact.form.emailPlaceholder": "your.email@example.com",
      "contact.form.phone": "Phone",
      "contact.form.phonePlaceholder": "(555) 123-4567",
      "contact.form.message": "Message",
      "contact.form.messagePlaceholder": "Tell us about your project...",
      "contact.form.submit": "Send Message",
      "contact.info.title": "Contact Information",
      "contact.info.phone": "Phone",
      "contact.info.whatsapp": "WhatsApp",
      "contact.info.whatsappText": "Chat with us on WhatsApp",
      "contact.info.email": "Email",
      "contact.info.serviceArea": "Service Area",
      "contact.info.serviceAreaText": "Serving the greater metropolitan area and surrounding communities",
      "contact.info.businessHours": "Business Hours",
      "contact.info.weekdays": "Monday - Friday: 8:00 AM - 6:00 PM",
      "contact.info.saturday": "Saturday: 9:00 AM - 4:00 PM",
      "contact.info.sunday": "Sunday: Closed",
      
      // Footer
      "footer.description": "Professional landscaping services to transform your outdoor space into a beautiful oasis.",
      "footer.quickLinks": "Quick Links",
      "footer.services": "Services",
      "footer.contact": "Contact",
      "footer.landscapeDesign": "Landscape Design",
      "footer.lawnCare": "Lawn Care",
      "footer.hardscaping": "Hardscaping",
      "footer.irrigation": "Irrigation",
      "footer.whatsappUs": "WhatsApp Us",
      "footer.copyright": "© 2025 GreenScape Landscaping. All rights reserved.",
      
      // Common
      "common.brandName": "GreenScape"
    }
  },
  ar: {
    translation: {
      // Header
      "header.home": "الرئيسية",
      "header.services": "الخدمات",
      "header.portfolio": "معرض الأعمال",
      "header.about": "من نحن",
      "header.contact": "اتصل بنا",
      "header.phone": "(555) 123-4567",
      "header.getEstimate": "احصل على تقدير مجاني",
      
      // Hero Section
      "hero.title": "حوّل مساحتك الخارجية",
      "hero.subtitle": "خدمات تنسيق حدائق احترافية لإنشاء حديقة أحلامك. من التصميم إلى التنفيذ، نحقق رؤيتك.",
      "hero.cta1": "احصل على تقدير مجاني",
      "hero.cta2": "شاهد أعمالنا",
      
      // Services Section
      "services.title": "خدماتنا",
      "services.subtitle": "حلول شاملة لتنسيق الحدائق مصممة خصيصاً لاحتياجاتك",
      "services.landscapeDesign.title": "تصميم المناظر الطبيعية",
      "services.landscapeDesign.description": "حوّل مساحتك الخارجية بتصاميم مناظر طبيعية مخصصة تتناسب مع رؤيتك وأسلوب حياتك. يقوم مصممونا الخبراء بإنشاء مساحات جميلة وعملية تعزز قيمة ممتلكاتك.",
      "services.lawnCare.title": "العناية بالمروج والصيانة",
      "services.lawnCare.description": "حافظ على مروجك خضراء وصحية على مدار العام من خلال خدمات الصيانة الشاملة بما في ذلك القص والتسميد والتهوية وبرامج العناية الموسمية.",
      "services.hardscaping.title": "الأعمال الصلبة",
      "services.hardscaping.description": "عزز حياتك الخارجية بأفنية رائعة وممرات وجدران استنادية ومطابخ خارجية. نستخدم مواد عالية الجودة لإنشاء ميزات صلبة متينة وجميلة.",
      "services.irrigation.title": "أنظمة الري",
      "services.irrigation.description": "أنظمة ري فعالة وآلية مصممة للحفاظ على صحة مناظرك الطبيعية مع الحفاظ على المياه. خدمات التركيب والصيانة والإصلاح متاحة.",
      "services.learnMore": "اعرف المزيد",
      
      // Portfolio Section
      "portfolio.title": "معرض أعمالنا",
      "portfolio.subtitle": "استكشف مشاريعنا الأخيرة وشاهد جودة عملنا",
      "portfolio.residential": "سكني",
      "portfolio.urbanGarden": "حديقة حضرية",
      "portfolio.commercial": "تجاري",
      "portfolio.beforeAfter": "قبل وبعد",
      "portfolio.modernGarden": "تصميم حديقة عصرية",
      "portfolio.smallSpace": "تحويل المساحات الصغيرة",
      "portfolio.summerLandscape": "منظر طبيعي صيفي",
      "portfolio.lawnRenovation": "تجديد المروج",
      
      // Why Choose Us Section
      "whyChooseUs.title": "لماذا تختارنا",
      "whyChooseUs.subtitle": "نحن ملتزمون بتقديم نتائج استثنائية تتجاوز توقعاتك",
      "whyChooseUs.experience.title": "خبرة أكثر من 20 عاماً",
      "whyChooseUs.experience.description": "خبرة مثبتة في تصميم وتنفيذ المناظر الطبيعية",
      "whyChooseUs.team.title": "فريق خبراء",
      "whyChooseUs.team.description": "محترفون معتمدون مكرسون للتميز",
      "whyChooseUs.quality.title": "جودة مضمونة",
      "whyChooseUs.quality.description": "ضمان رضا بنسبة 100٪ على جميع المشاريع",
      "whyChooseUs.timely.title": "إنجاز في الوقت المحدد",
      "whyChooseUs.timely.description": "مشاريع مكتملة في الموعد المحدد وضمن الميزانية",
      
      // Testimonials Section
      "testimonials.title": "ماذا يقول عملاؤنا",
      "testimonials.subtitle": "لا تأخذ كلامنا فقط - استمع من عملائنا الراضين",
      "testimonials.sarah.text": "عمل رائع بشكل لا يصدق! لقد حولوا فناءنا الخلفي إلى واحة جميلة. كان الفريق محترفاً ودقيقاً وتجاوز توقعاتنا.",
      "testimonials.sarah.name": "سارة جونسون",
      "testimonials.michael.text": "أفضل خدمة تنسيق حدائق في المنطقة. اهتمامهم بالتفاصيل وتصاميمهم الإبداعية رائعة. أوصي بشدة لأي مشروع تنسيق حدائق!",
      "testimonials.michael.name": "مايكل تشين",
      "testimonials.emily.text": "من التصميم إلى الإنجاز، كانت العملية بأكملها سلسة. فناءنا الجديد وحديقتنا هما بالضبط ما تصورناه. شكراً لكم!",
      "testimonials.emily.name": "إميلي رودريغيز",
      
      // Contact Section
      "contact.title": "تواصل معنا",
      "contact.subtitle": "هل أنت مستعد لتحويل مساحتك الخارجية؟ اتصل بنا اليوم للحصول على تقدير مجاني",
      "contact.form.name": "الاسم",
      "contact.form.namePlaceholder": "اسمك",
      "contact.form.email": "البريد الإلكتروني",
      "contact.form.emailPlaceholder": "your.email@example.com",
      "contact.form.phone": "الهاتف",
      "contact.form.phonePlaceholder": "(555) 123-4567",
      "contact.form.message": "الرسالة",
      "contact.form.messagePlaceholder": "أخبرنا عن مشروعك...",
      "contact.form.submit": "إرسال الرسالة",
      "contact.info.title": "معلومات الاتصال",
      "contact.info.phone": "الهاتف",
      "contact.info.whatsapp": "واتساب",
      "contact.info.whatsappText": "تحدث معنا على واتساب",
      "contact.info.email": "البريد الإلكتروني",
      "contact.info.serviceArea": "منطقة الخدمة",
      "contact.info.serviceAreaText": "نخدم منطقة العاصمة الكبرى والمجتمعات المحيطة",
      "contact.info.businessHours": "ساعات العمل",
      "contact.info.weekdays": "الاثنين - الجمعة: 8:00 صباحاً - 6:00 مساءً",
      "contact.info.saturday": "السبت: 9:00 صباحاً - 4:00 مساءً",
      "contact.info.sunday": "الأحد: مغلق",
      
      // Footer
      "footer.description": "خدمات تنسيق حدائق احترافية لتحويل مساحتك الخارجية إلى واحة جميلة.",
      "footer.quickLinks": "روابط سريعة",
      "footer.services": "الخدمات",
      "footer.contact": "اتصل بنا",
      "footer.landscapeDesign": "تصميم المناظر الطبيعية",
      "footer.lawnCare": "العناية بالمروج",
      "footer.hardscaping": "الأعمال الصلبة",
      "footer.irrigation": "الري",
      "footer.whatsappUs": "واتساب",
      "footer.copyright": "© 2025 جرين سكيب لتنسيق الحدائق. جميع الحقوق محفوظة.",
      
      // Common
      "common.brandName": "جرين سكيب"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'ar',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
