const en = {
  meta: {
    title: 'Tadashi (CHU) — Portfolio',
    description:
      'Portfolio of Tadashi (CHU) — full-stack engineer and CS student at the University of Aizu.',
    label: 'English',
    short: 'EN'
  },
  nav: {
    open: 'Menu',
    close: 'Close',
    items: {
      hero: 'Top',
      projects: 'Projects',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact'
    }
  },
  hero: {
    name: 'Tadashi (CHU)',
    role: 'Full-stack Engineer',
    tagline:
      'Studying CS at the University of Aizu while learning web app development and ML/DL at 2WINS.',
    ctaProjects: 'Projects',
    ctaContact: 'Contact',
    scroll: 'Scroll',
    photoAlt: 'Photo of Tadashi (CHU)'
  },
  sections: {
    projects: 'Projects',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact'
  },
  projects: {
    viewOnGithub: 'View on GitHub'
  },
  about: {
    body: [
      'Studying computer science at the University of Aizu, which I entered a year early through the early-entrance program, while interning at 2WINS. There I implement APIs and the data layer, integrate ML and LLMs into real applications, and build the React frontend.',
      'What drives all of it is that I simply like learning. I reimplement papers and books until the ideas are mine rather than quoted. At work I care most about the parts nobody puts in a demo — bugs that only appear under load, caching, anything asynchronous — because those are what decide whether the thing holds up.'
    ],
    location: 'Fukushima, Japan',
    school: 'University of Aizu'
  },
  experience: {
    present: 'Present',
    tbd: 'TBD',
    short: 'Short-term'
  },
  skills: {
    capabilitiesTitle: 'What I can do',
    capabilities: [
      {
        title: 'Full-stack product features.',
        body: 'I implement features end to end, across infra, frontend, and backend.'
      },
      {
        title: 'Backend services & APIs.',
        body: 'Async APIs on FastAPI + PostgreSQL — SQLModel, Alembic migrations, auth, pytest / Playwright coverage, and Docker / AWS deploys.'
      },
      {
        title: 'LLM-powered features.',
        body: 'Prompt design, structured output, and pipeline work with LangChain and commercial LLM APIs.'
      },
      {
        title: 'ML / DL from scratch.',
        body: 'Transformers, CNNs, and classical baselines in PyTorch and NumPy — built from the paper up, not just wrapped.'
      }
    ],
    stackTitle: 'Stack I work with',
    groups: {
      languages: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend',
      ml: 'ML / DL',
      infra: 'Infra & Tools'
    }
  },
  contact: {
    body: 'Open to internships, research collaboration, and freelance work.',
    email: 'Email',
    github: 'GitHub',
    x: 'X'
  },
  footer: {
    builtWith: '',
    source: 'Source'
  },
  notFound: {
    title: 'Page not found',
    body: 'The page you are looking for does not exist.',
    back: 'Back to top'
  },
  theme: {
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
    labelLight: 'Light',
    labelDark: 'Dark'
  }
};

export type Dictionary = typeof en;

export default en;
