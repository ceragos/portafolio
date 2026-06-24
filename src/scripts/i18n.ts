type Lang = 'en' | 'es';

const t: Record<string, Record<Lang, string>> = {
  // Nav
  'nav.about':      { en: 'About',      es: 'Sobre mí'   },
  'nav.stack':      { en: 'Stack',      es: 'Stack'       },
  'nav.projects':   { en: 'Projects',   es: 'Proyectos'   },
  'nav.experience': { en: 'Experience', es: 'Experiencia' },
  'nav.contact':    { en: 'Contact Me', es: 'Contáctame'  },

  // Hero
  'hero.headline': {
    en: 'Engineering Decides;<br/><span class="text-primary-container">AI Accelerates</span>',
    es: 'La Ingeniería Decide;<br/><span class="text-primary-container">La IA Acelera</span>',
  },
  'hero.subtitle': {
    en: 'Senior Backend &amp; Applied AI Engineer specializing in production-ready Generative AI and scalable systems.',
    es: 'Ingeniero Senior de Backend e IA Aplicada especializado en IA Generativa lista para producción y sistemas escalables.',
  },
  'hero.cta.projects': { en: 'View Projects', es: 'Ver Proyectos' },
  'hero.cta.contact':  { en: 'Contact Me',    es: 'Contáctame'   },

  // About
  'about.heading': { en: 'About Me', es: 'Sobre Mí' },
  'about.para1': {
    en: 'I am a <strong>proactive, patient, and collaborative</strong> Senior Backend &amp; Applied AI Engineer. Clinical management teams querying hospital operational and financial KPIs in natural language — no static dashboards required: that is what I built and shipped to production. My differentiator is real generative AI in production, not on the whiteboard: I founded and am the principal contributor of Go Ecosystem Digital Health\'s three-component GenAI platform.',
    es: 'Soy un Ingeniero Senior de Backend e IA Aplicada <strong>proactivo, paciente y colaborativo</strong>. Equipos de dirección clínica consultando KPIs operacionales y financieros del hospital en lenguaje natural — sin dashboards estáticos: eso es lo que construí y puse en producción. Mi diferencial es IA generativa real en producción, no en la pizarra: fundé y soy el principal contribuidor de la plataforma GenAI de tres componentes de Go Ecosystem Digital Health.',
  },
  'about.para2': {
    en: 'The backend foundation underpinning that differentiator is deep and long-running. I am the principal author of Go Ecosystem Digital Health\'s clinical backend RCF API — the Django/DRF REST engine powering the hospital mobile app integrating legacy HIS systems and external laboratory providers. AI does not replace the fundamentals — it amplifies them. I command Python, Django and Linux at a level that lets me orchestrate NLP models and resolve async deadlocks in production. <strong>AI accelerates; engineering decides.</strong>',
    es: 'La base de backend que sustenta ese diferencial es profunda y de largo recorrido. Soy el autor principal del RCF API de Go Ecosystem Digital Health — el motor REST Django/DRF que impulsa la app móvil hospitalaria integrando sistemas HIS heredados y proveedores de laboratorio externos. La IA no reemplaza los fundamentos — los amplifica. Domino Python, Django y Linux a un nivel que me permite orquestar modelos NLP y resolver deadlocks asíncronos en producción. <strong>La IA acelera; la ingeniería decide.</strong>',
  },
  'about.numbers': { en: 'By the Numbers',    es: 'En Números'          },
  'about.years':   { en: 'Years Experience',  es: 'Años de Experiencia' },
  'about.proj':    { en: 'Projects',          es: 'Proyectos'           },
  'about.orgs':    { en: 'Organizations',     es: 'Organizaciones'      },
  'about.commits': { en: 'Commits in RCF API', es: 'Commits en RCF API' },

  // Stack
  'stack.heading': { en: 'Skills &amp; Technologies', es: 'Habilidades y Tecnologías' },

  // Projects
  'projects.heading': { en: 'Featured Projects', es: 'Proyectos Destacados' },
  'achievement.label': { en: 'Key Achievement:', es: 'Logro Clave:' },

  'proj1.title': { en: 'Generative AI Predictability Platform', es: 'Plataforma GenAI de Predictibilidad Clínica' },
  'proj1.company': { en: 'Go Ecosystem Digital Health', es: 'Go Ecosystem Digital Health' },
  'proj1.desc': {
    en: 'Conversational CMI for clinical management: LangGraph agents for analytical queries, RAG with pgvector (HNSW) over KPI tables, Langfuse observability, and XMLA .NET client for Power BI Fabric integration. Successfully stabilized in production by resolving async deadlocks and SIGABRT fixes.',
    es: 'CMI conversacional para dirección clínica: agentes LangGraph para consultas analíticas, RAG con pgvector (HNSW) sobre tablas de KPI, observabilidad con Langfuse, y cliente XMLA .NET para integración con Power BI Fabric. Estabilizado en producción resolviendo deadlocks asíncronos y correcciones de SIGABRT.',
  },
  'proj1.achievement': {
    en: 'clinical management now queries hospital operational and financial KPIs in natural language with no dependency on static dashboards.',
    es: 'la dirección clínica ahora consulta KPIs operacionales y financieros del hospital en lenguaje natural, sin dependencia de dashboards estáticos.',
  },

  'proj2.title': { en: 'RCF API (Registro Clínico Fácil)', es: 'RCF API (Registro Clínico Fácil)' },
  'proj2.desc': {
    en: 'Deepest backend project (63 months). Clinical REST backend (Django/DRF) powering the hospital mobile app: clinical records, triage, hospitalization; integrates Hosvital HIS via raw SQL Server, SOAP and external lab connections.',
    es: 'Proyecto backend más profundo (63 meses). Backend REST clínico (Django/DRF) que impulsa la app móvil hospitalaria: registros clínicos, triage, hospitalización; integra Hosvital HIS vía SQL Server raw, SOAP y conexiones a laboratorios externos.',
  },
  'proj2.achievement': {
    en: 'principal author of Go Ecosystem Digital Health\'s long-running clinical backend — 3,215 commits over 63 months, integrating legacy HIS.',
    es: 'autor principal del backend clínico de larga duración de Go Ecosystem Digital Health — 3.215 commits en 63 meses, integrando HIS heredado.',
  },

  'proj3.title': { en: 'Evazard SaaS POS', es: 'Evazard SaaS POS' },
  'proj3.desc': {
    en: 'Solo-built SaaS point-of-sale platform for SMBs with 24 domain controllers: catalog, recurring and installment sales, cash registers, quotes, Mercado Pago subscription plans, and React Native mobile app.',
    es: 'Plataforma SaaS de punto de venta para PYMEs construida en solitario con 24 controladores de dominio: catálogo, ventas recurrentes y en cuotas, cajas registradoras, cotizaciones, planes de suscripción Mercado Pago y app móvil React Native.',
  },
  'proj3.achievement': {
    en: 'under the CValenciaIT brand, shipped three complete products from idea to production solo — demonstrating end-to-end ownership.',
    es: 'bajo la marca CValenciaIT, entregué tres productos completos de idea a producción en solitario — demostrando ownership de extremo a extremo.',
  },

  'proj4.title': { en: 'Incheck Modules', es: 'Módulos Incheck' },
  'proj4.desc': {
    en: 'Multi-tenant Occupational Safety and Health (OSH) SaaS leveraging django-tenants for schema isolation architecture, featuring robust inventory modules and async Excel imports.',
    es: 'SaaS multi-tenant de Seguridad y Salud en el Trabajo (SST) usando django-tenants para aislamiento por esquema, con módulos de inventario robustos e importaciones asíncronas de Excel.',
  },
  'proj4.achievement': {
    en: 'designed and implemented end-to-end multi-tenant schema isolation and robust async processing.',
    es: 'diseñé e implementé de extremo a extremo el aislamiento multi-tenant por esquema y el procesamiento asíncrono robusto.',
  },

  // Experience
  'exp.heading': { en: 'Experience', es: 'Experiencia' },

  'exp1.title': { en: 'Senior Backend &amp; Applied AI Engineer', es: 'Ingeniero Senior de Backend e IA Aplicada' },
  'exp1.period': { en: 'Go Ecosystem Digital Health | 2021 - Present', es: 'Go Ecosystem Digital Health | 2021 - Presente' },
  'exp1.desc': {
    en: 'Designed and deployed end-to-end the three-component GenAI platform for clinical predictability. Took ownership of the RCF API backend as principal author, powering the hospital mobile application across its full lifecycle. Orchestrated NLP models and resolved complex production deadlocks.',
    es: 'Diseñé y desplegué de extremo a extremo la plataforma GenAI de tres componentes para predictibilidad clínica. Tomé ownership del backend RCF API como autor principal, impulsando la aplicación móvil hospitalaria durante su ciclo de vida completo. Orquesté modelos NLP y resolví deadlocks complejos en producción.',
  },

  'exp2.title': { en: 'Founder &amp; Full-Stack Lead', es: 'Fundador y Líder Full-Stack' },
  'exp2.period': { en: 'CValenciaIT | 2022 - Present', es: 'CValenciaIT | 2022 - Presente' },
  'exp2.desc': {
    en: 'Shipped Evazard solo, a SaaS POS platform for SMBs with 24 domain controllers. Built Vio La Suerte full-stack and provided technical direction and mentorship. Shipped multiple complete products from idea to production solo.',
    es: 'Entregué Evazard en solitario, una plataforma SaaS POS para PYMEs con 24 controladores de dominio. Construí Vio La Suerte full-stack y brindé dirección técnica y mentoría. Entregué múltiples productos completos de idea a producción en solitario.',
  },

  'exp3.title': { en: 'Backend Engineer', es: 'Ingeniero Backend' },
  'exp3.period': { en: 'Incheck SAS | 2024 - Present', es: 'Incheck SAS | 2024 - Presente' },
  'exp3.desc': {
    en: 'Designed and implemented end-to-end the inventory module for the multi-tenant occupational health SaaS on a django-tenants schema-based isolation architecture, alongside async Excel imports.',
    es: 'Diseñé e implementé de extremo a extremo el módulo de inventario para el SaaS de salud ocupacional multi-tenant sobre arquitectura de aislamiento por esquema con django-tenants, junto con importaciones asíncronas de Excel.',
  },

  'exp4.title': { en: 'Lead Backend Engineer', es: 'Ingeniero Backend Líder' },
  'exp4.period': { en: 'City of Cali (SGCPS/Awako) | 2023', es: 'Alcaldía de Cali (SGCPS/Awako) | 2023' },
  'exp4.desc': {
    en: 'Led the Government Contract Management System backend as majority contributor, covering the full pre-contractual-to-invoicing lifecycle with Django/DRF.',
    es: 'Lideré el backend del Sistema de Gestión de Contratos Gubernamentales como contribuidor mayoritario, cubriendo el ciclo de vida completo desde la fase precontractual hasta la facturación con Django/DRF.',
  },

  // Education
  'edu.heading': { en: 'Education &amp; Certifications', es: 'Educación y Certificaciones' },
  'edu1.title':  { en: 'Information Systems Engineering', es: 'Ingeniería en Sistemas de Información' },
  'edu2.title':  { en: 'Software Programming Technician', es: 'Técnico en Programación de Software' },

  // Contact
  'contact.heading':  { en: "Let's Build Something Scalable", es: 'Construyamos Algo Escalable'                                                                           },
  'contact.subtitle': { en: "Looking to deploy generative AI in production or build a robust backend architecture? Let's connect.", es: '¿Buscas implementar IA generativa en producción o construir una arquitectura backend robusta? Conectemos.' },
  'contact.name':     { en: 'Name',         es: 'Nombre'              },
  'contact.email':    { en: 'Email',        es: 'Correo electrónico'  },
  'contact.message':  { en: 'Message',      es: 'Mensaje'             },
  'contact.send':     { en: 'Send Message', es: 'Enviar Mensaje'      },

  // Footer
  'footer.tagline': { en: 'AI Accelerates; Engineering Decides.', es: 'La IA Acelera; La Ingeniería Decide.' },
  'footer.privacy': { en: 'Privacy', es: 'Privacidad' },
  'footer.terms':   { en: 'Terms',   es: 'Términos'  },
};

export function applyLang(lang: Lang): void {
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key && t[key]?.[lang] !== undefined) el.innerHTML = t[key][lang];
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-ph]').forEach((el) => {
    const key = el.dataset.i18nPh;
    if (key && t[key]?.[lang] !== undefined) (el as HTMLInputElement).placeholder = t[key][lang];
  });

  document.querySelectorAll<HTMLElement>('.lang-toggle').forEach((btn) => {
    btn.textContent = lang === 'en' ? 'ES' : 'EN';
  });
}

export function initLang(): void {
  const saved = (localStorage.getItem('lang') as Lang) ?? 'en';
  applyLang(saved);

  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = (localStorage.getItem('lang') as Lang) ?? 'en';
      applyLang(current === 'en' ? 'es' : 'en');
    });
  });
}
