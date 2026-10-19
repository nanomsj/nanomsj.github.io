import { v4 as uuidv4 } from 'uuid';

export const headData = {
  title: 'Shijia Min',
  lang: 'en',
  description: 'Shijia Min - Biostatistics undergraduate at Peking University',
};

export const aboutData = {
  img: 'me.jpg',
  paragraphOne:
    "Hey! I'm Shijia, an undergraduate at School of Mathematical Sciences, Peking University, majoring in Biostatistics.",
  paragraphTwo:
    "Beyond coursework, I like working on hands-on projects that bridge theory and application.",
  paragraphThree:
    "When I step away from the screen, you may find me on the football field.",
  resume: '/resume.pdf',
};

export const educationData = [
  {
    id: uuidv4(),
    school: 'Peking University',
    schoolUrl: 'https://www.pku.edu.cn',
    period: 'Sep. 2024 – Present',
    // 学位行，每行渲染成：前缀 in 专业 · 学校（学校可点击），顺序即数组顺序
    // 前缀写法要严谨：主修写学位（B.S. = 理学学士）；光华双专业不单独授学位，
    // 官方口径是"毕业证书标注双专业"，所以写 Double Major 而不是学位缩写。
    degrees: [
      {
        prefix: 'B.S.',
        field: 'Biostatistics',
        school: 'School of Mathematical Sciences',
        url: 'https://www.math.pku.edu.cn',
      },
      {
        prefix: 'Double Major',
        field: 'Business Administration',
        school: 'Guanghua School of Management',
        url: 'https://www.gsm.pku.edu.cn/',
      },
    ],
    details: [],
    coursework: 'https://github.com/nanomsj/msj-in-PKU',
    solutions: '/solutions/',
  },
  {
    id: uuidv4(),
    school: 'Beijing No.4 High School',
    schoolUrl: 'https://bhsf.lezhiyun.com/cms/bjsz/index.htm',
    department: 'Chemistry Special Class',
    period: 'Sep. 2021 – Jun. 2024',
    details: [],
  },
];

export const experienceData = [
  {
    id: uuidv4(),
    company: 'Sino Boson Technical Company',
    role: 'AI Application Engineer',
    period: 'Aug. 2026',
    details: [
      {
        text: 'Built an AI-powered resume screening and job-matching system.',
        url: 'https://github.com/nanomsj/ai-resume-screener',
      },
      'Implemented OCR-based digitization, candidate scoring, and JD-candidate matching.',
    ],
  },
  {
    id: uuidv4(),
    company: 'Student Union, School of Mathematical Sciences',
    role: 'Team Lead, Arts Department',
    period: 'Mar. 2025 – Mar. 2026',
    details: [
      'Organized campus events including freshman Gala and New Year Gala.',
    ],
  },
];

export const projectsData = [
  {
    id: uuidv4(),
    img: 'clinical-trial.png',
    title: 'Bayesian Information Borrowing in Clinical Trials',
    info: 'Explored Bayesian methods for information borrowing across clinical trial subgroups.',
    info2:
      'Compared independent models, complete pooling, and hierarchical Bayesian approaches using Python/PyMC.',
    pdf: '/clinical-trials.pdf',
  },
  {
    id: uuidv4(),
    img: 'volatility.png',
    title: 'Nonparametric Bayesian Volatility Learning',
    info: 'Reproduced a published Bayesian approach to estimating financial volatility.',
    info2:
      'Reimplemented the core estimation pipeline from scratch. Presented as an oral report.',
  },
];

export const awardsData = [
  {
    id: uuidv4(),
    title: '1st Prize, Beijing Collegiate Mathematics Competition',
    detail: '36th Competition, Mathematics Major, Group A',
  },
  {
    id: uuidv4(),
    title: 'Gold Medal, Chinese Chemistry Olympiad',
    detail: '37th Competition, National Final',
  },
  {
    id: uuidv4(),
    title: 'Peking University Practice & Public Service Award',
    detail: '2024-2025',
  },
];

export const skillsData = {
  programming: 'Python, R',
  quantitative: 'Algorithms',
  languages: 'Chinese (native), English (CET-6)',
};

export const contactData = {
  cta: "You can find me on the following platforms:",
  email: 'minsj1125@126.com',
  wechat: 'aijihsnim',
};

export const footerData = {
  networks: [
    { id: uuidv4(), name: 'github', url: 'https://github.com/nanomsj' },
    { id: uuidv4(), name: 'bilibili', url: 'https://space.bilibili.com/402739500' },
    { id: uuidv4(), name: 'steam', url: 'https://steamcommunity.com/profiles/76561199702629733/' },
  ],
};

export const githubButtons = {
  isEnabled: false,
};
