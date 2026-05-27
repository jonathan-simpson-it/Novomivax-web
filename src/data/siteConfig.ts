export const SITE_TITLE = 'NOVOMI VAX';
export const SITE_DESCRIPTION =
  'Broad-spectrum tumour reprogramming immunotherapy platform for solid tumours. Based in Hong Kong.';

export interface NavItem {
  label: string;
  href: string;
  children?: readonly NavItem[];
}

export const NAV_ITEMS: readonly NavItem[] = [
  {
    label: 'Who We Are',
    href: '#who-we-are',
    children: [
      { label: 'Who We Are', href: '#who-we-are' },
      { label: 'Core Team', href: '#team' },
    ],
  },
  {
    label: 'Mission',
    href: '#mission',
    children: [
      { label: 'Our Mission', href: '#mission' },
      { label: 'Timeline', href: '#timeline' },
      { label: 'Partners', href: '#partners' },
    ],
  },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why It Matters', href: '#why-it-matters' },
  { label: 'Funding', href: '#funding' },
  { label: 'Contact', href: '#contact' },
] as const;

export const HERO = {
  eyebrow: 'Solid Tumour Immunotherapy',
  headline:
    'Turning immune-cold tumours into targets the body can recognise.',
  paragraph:
    'NOVOMI VAX is developing a broad-spectrum immunotherapy platform designed to reprogram the tumour microenvironment. Our approach aims to address a critical challenge in oncology: helping more patients with solid tumours potentially benefit from immune-based treatment strategies.',
  primaryCta: 'Contact the Team',
  secondaryCta: 'How It Works',
} as const;

export const WHO_WE_ARE = {
  heading: 'Who We Are',
  paragraph:
    "NOVOMI VAX is a Hong Kong-based medical startup working at the intersection of immunology and translational research. We are focused on developing new approaches to solid tumour immunotherapy, drawing on the region's growing life science ecosystem and collaborative research networks. Our team brings together scientific, clinical, and translational expertise, with a shared commitment to advancing meaningful innovation in oncology.",
  facts: [
    { label: 'Founded', value: 'Hong Kong, 2025' },
    {
      label: 'Focus',
      value:
        'Solid tumour immunotherapy and tumour microenvironment reprogramming',
    },
    {
      label: 'Team',
      value: 'Scientists, clinicians, and translational researchers',
    },
    {
      label: 'Collaboration',
      value:
        'Investors, hospitals, academic labs, and biopharma partners',
    },
  ],
} as const;

export const CORE_TEAM = {
  heading: 'Core Team',
  intro:
    'A blend of scientific discovery and clinical experience, translating cancer research into approaches with real-world potential.',
  members: [
    {
      role: 'Chief Scientist',
      subtitle: 'HKU Chair Professor',
      name: 'Prof. Jiandong Huang',
      bio: [
        'L & T Charitable Foundation Professor',
        'Published 1st synthetic biology paper in Science from Greater China',
        'Recognised expert in vaccine R&D leveraging synthetic biology',
        'Co-founder of Bay Vax Biotech and DELONIX (successful experience)',
        'PhD, UCLA; B.A., Fudan University',
      ],
    },
    {
      role: 'Scientist',
      subtitle: 'HKU Ph.D. in Biomedicine',
      name: 'Renhao Li',
      bio: [
        '4 years of experience in mRNA drugs and tumour immunotherapy R&D',
        'Deep expertise in immune-oncology antibody drug discovery',
        'M.Sc. in cancer biology, Tongji University',
      ],
    },
    {
      role: 'General Manager',
      subtitle: 'HKU Ph.D. in Translational Medicine',
  name: 'En He',
      bio: [
        'Translational medicine research in HKU & BICI',
        '1 year of clinical experience, Peking Union Medical College',
        '3 years of experience in basic medicine research, M.Sc., Sun Yat-sen University',
        'B.A. & B.S., Jilin University',
      ],
    },
    {
      role: 'Clinical Lead',
      subtitle: 'Clinical Doctor',
      name: 'Dr. Jinquan Liu',
      bio: [
        '9 years of experience in clinic',
        'MD in cutaneous tumour area, Peking Union Medical College',
        'Participated in multiple clinical trials',
        'Extensive experience in registration',
      ],
    },
  ],
} as const;

export const MISSION = {
  heading: 'Our Mission',
  statement:
    "NOVOMI VAX's long-term goal is to broaden the reach and effectiveness of immunotherapy for patients with solid tumours. By exploring ways to make more tumours susceptible to immune activity, we aim to contribute to a future where immunotherapeutic options are more widely accessible and impactful.",
  bullets: [
    'Addressing the limitations of current therapies, particularly for patients whose tumours do not respond to existing immunotherapies',
    'Developing approaches that are designed to be practical, scalable, and compatible with real-world clinical settings',
    'A commitment to responsible innovation and accessibility in the development of new therapeutic strategies',
  ],
} as const;

export const TIMELINE = {
  heading: 'Project Timeline',
  intro:
    'Key milestones from incorporation through to active development and clinical partnerships.',
  milestones: [
    { date: 'Oct 2025', text: 'Incorporated NOVOMI VAX Limited in Hong Kong' },
    { date: 'Jan 2026', text: 'Selected for HKU Deep Tech 100 training programme' },
    { date: 'Jan 2026', text: 'Won Merit Award at HK Techthon+ 2026' },
    { date: 'Feb 2026', text: 'Joined HKU iDendron Entrepreneurship Club' },
    { date: 'Mar 2026', text: 'Started HK Science Park Ideation Programme' },
    { date: 'Apr 2026', text: 'Built clinical partnerships with HONOGENE, Zhida Pharma, and 6 hospitals' },
    { date: 'May 2026', text: 'Won Champion Award at Great Bay Area Med Techthon' },
  ],
} as const;

export const HOW_IT_WORKS = {
  heading: 'How It Works',
  intro:
    "NOVOMI VAX is developing a broad-spectrum mRNA vaccine platform designed to reprogram the tumour microenvironment, turning 'cold' solid tumours into immunologically 'hot' ones  -  enabling the body's own immune system to fight back.",
  disclaimer:
    'This content is provided for informational and research overview purposes only. It does not constitute medical advice and does not represent approved therapeutic claims.',
  stages: [
    {
      id: 'problem',
      heading: 'Novel Approach  -  Label Tumours to Provide Druggable Targets',
      body: 'Current immunotherapy fails for "cold" solid tumours because of three core problems:',
      problems: [
        'Heterogeneity, Antigen Escape & Adaptive Resistance  -  tumour cells mutate and evade immune targeting',
        'No druggable target  -  the immune system has nothing to latch onto',
        'Immunosuppressive Tumour Microenvironment (TME)  -  the area around the tumour actively suppresses immune response',
      ],
      note: 'What\'s needed: a druggable target the immune system can recognise.',
    },
    {
      id: 'solution',
      heading: 'One Drug with Multiple Therapeutic Effects  -  Druggable Target & Heterogeneity',
      body: "NOVOMI VAX's mRNA vaccine platform addresses all three barriers simultaneously:",
      points: [
        'Provides tumours with a druggable target  -  labels them so the immune system can recognise them',
        'Overcomes antigen heterogeneity  -  works even when tumour cells vary',
        'Reprograms the immunosuppressive TME to become immune-permissive',
      ],
    },
    {
      id: 'mechanism',
      heading: 'Turn Cold Tumour into Hot Tumour',
      body: 'The vaccine reprograms the tumour microenvironment in three stages:',
      steps: [
        'The mRNA vaccine is delivered into the tumour environment',
        'It labels tumour cells to make them recognisable to the immune system',
        'The immune system is activated  -  the tumour "heats up" and immune cells infiltrate and attack',
      ],
    },
    {
      id: 'cascade',
      heading: 'Abscopal Effect Through Antigen Spreading',
      body: 'Beyond the primary tumour, the platform triggers a cascade of broader immune activation:',
      cascade: [
        'Elimination of labelled tumour cells  -  the immune system destroys the initially targeted cells',
        'Antigen-spreading  -  as tumour cells are destroyed, more tumour antigens are released and recognised',
        'Broader tumour-specific T cell generation  -  the immune system learns more targets',
        'Systemic tumour elimination  -  the body\'s immune system can now attack tumours beyond the original treatment site',
      ],
      note: 'This is called the "abscopal effect"  -  treating one area leads to systemic anti-tumour response.',
    },
  ],
} as const;

export const WHY_IT_MATTERS = {
  heading: 'Why It Matters',
  paragraph:
    "Immunotherapy has transformed the treatment landscape for many cancers, yet a substantial number of patients with solid tumours do not fully benefit from currently available options. These tumours often remain poorly recognised by the immune system, limiting the effectiveness of even the most advanced treatments. A platform that can help make more tumours 'visible' to immune activity could represent an important step forward.",
  secondary:
    'NOVOMI VAX is working at the intersection of immunology and translational research, collaborating with clinicians, academic groups, and industry partners to explore how tumour reprogramming approaches may one day expand the reach of immunotherapy.',
} as const;

export const FUNDING_CTA = {
  heading: 'Partner With Us',
  intro:
    'NOVOMI VAX is actively seeking investment and collaborative partnerships to advance the platform from early-stage research into clinical development.',
  audienceCards: [
    {
      icon: 'investor',
      heading: 'For Investors',
      body: 'We are in active fundraising. We welcome conversations with life science VCs, family offices, and angel investors interested in oncology platform technology.',
      cta: 'Request Investor Deck',
      href: '#contact',
    },
    {
      icon: 'pharma',
      heading: 'For Pharma / Biotech Partners',
      body: 'We are open to co-development, licensing, and research collaboration discussions with pharmaceutical and biotech companies.',
      cta: 'Discuss Partnership',
      href: '#contact',
    },
    {
      icon: 'clinical',
      heading: 'For Clinical & Academic Collaborators',
      body: 'We are building our clinical network and welcome enquiries from hospital departments, academic research centres, and translational medicine experts.',
      cta: 'Explore Collaboration',
      href: '#contact',
    },
  ],
} as const;

export const CONTACT = {
  heading: 'Contact',
  paragraph:
    'We welcome inquiries from investors, potential partners, and academic collaborators. If you would like to learn more about NOVOMI VAX or explore ways to work together, please reach out.',
  name: 'En He 恩和',
  email: 'enhe00000@connect.hku.hk',
  phone1: '+852 84970818',
  phone2: '+86 17648143698',
  responseNote:
    'We aim to respond to all inquiries within several business days. To help us direct your message, please include a brief description of your interest.',
  disclaimer:
    'The information on this website is provided for general corporate and research overview purposes only. It does not constitute medical advice, nor does it promote or make claims about any approved therapeutic product.',
} as const;

export interface Partner {
  name: string;
  logo: string;
}

export const PARTNERS = {
  heading: 'Our Partners & Collaborators',
  partners: [
    { name: 'University of Hong Kong', logo: '/images/partners/hku.svg' },
    { name: 'Hong Kong Science Park (HKSTP)', logo: '/images/partners/hkstp.svg' },
    { name: 'HONOGENE', logo: '/images/partners/hongene.svg' },
    { name: 'Zhida Pharmaceutical', logo: '/images/partners/zhida.png' },
    { name: 'University of Hong Kong-Shenzhen Hospital', logo: '/images/partners/hku-szh.jpg' },
    { name: "Shenzhen People's Hospital", logo: '/images/partners/shenzhen-ph.png' },
    { name: 'HK Techthon+ 2026', logo: '/images/partners/hk-techthon.png' },
    { name: 'HKU Deep Tech 100', logo: '/images/partners/hku-deeptech.png' },
    { name: 'HKU iDendron Entrepreneurship Club', logo: '/images/partners/hku-idendron.png' },
  ],
} as const;

export const FOOTER = {
  copyright: `\u00A9 ${new Date().getFullYear()} NOVOMI VAX. All rights reserved.`,
} as const;
