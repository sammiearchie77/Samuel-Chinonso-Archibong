// gitprofile.config.js

const config = {
    github: {
      username: 'archibong',
      sortBy: 'stars', 
      limit: 10, 
      exclude: {
        forks: false, // Forked projects will not be displayed if set to true.
        projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
      },
    },
    social: {
      linkedin: 'samuel-archibong',
      twitter: '@geecoding',
      facebook: 'CodingGee',
      instagram: 'coding_gee',
      youtube: 'Samuel Archibong',
      dribbble: '',
      behance: '',
      medium: 'samuelarchibong',
      dev: 'samuelarchibong',
      stackoverflow: 'archibong-samuel',
      skype: '',
      telegram: '',
      website: 'https://codinggee.tech',
      phone: '+2348103155891',
      email: 'archibong.chinonso.samuel@gmail.com',
    },
    resume: {
      fileUrl:
        'https://docs.google.com/document/d/1T1prwZ51suwEVEQ4kWR19OBLA24HkaUC67da7OelwVU/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
    },
    skills: [
      'JavaScript',
      'React.js',
      'Next.js',
      'Node.js',
      'Django',
      'Next.js',
      'MySQL',
      'PostgreSQL',
      'MongoDb',
      'Redis',
      'Git',
      'Docker',
      'Kubenetics',
      'vagrant',
      'CSS',
      'Tailwind',
      'AWS',
      'CCNA'
    ],
    experiences: [
      {
        company: 'Alx Africa',
        position: 'Software Engineer',
        from: 'August 2022',
        to: 'Present',
        companyLink: 'https://alxafrica.com',
      },
      {
        company: 'HNG ZURI',
        position: 'React Developer',
        from: 'August 2021',
        to: 'October 2021',
        companyLink: 'https://internship.zuri.team/',
      },
      {
        company: 'Xircom ICT',
        position: 'Jnr Network Engr / IT support',
        from: 'May 2017',
        to: 'July 2019',
        companyLink: 'https://example.com',
      },
    ],
    certifications: [
      {
        name: 'Software Engineering',
        body: 'Holberton SE',
        year: 'October 2023',
        link: 'https://example.com',
      },
    ],
    education: [
      {
        institution: 'Institution Name',
        degree: 'Degree',
        from: '2015',
        to: '2019',
      },
      {
        institution: 'Institution Name',
        degree: 'Degree',
        from: '2012',
        to: '2014',
      },
    ],
  
    // To hide the `My Projects` section, keep it empty.
    externalProjects: [
      {
        title: 'Web Signature Application',
        description:
          '"Signature" is a web-based task roster application designed to streamline task management and enhance team collaboration.',
        imageUrl:
          'https://github.com/archbong/signature/raw/master/Task%20Management%20Dashboard.png',
        link: 'https://websignature.tech',
      },
      {
        title: 'Career Starter Application',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        imageUrl: 'https://via.placeholder.com/250x250',
        link: 'https://example.com',
      },
    ],
    // Display blog posts from your medium or dev account. (Optional)
    blog: {
      source: 'dev', // medium | dev
      username: 'arifszn', // to hide blog section, keep it empty
      limit: 2, // How many posts to display. Max is 10.
    },
    googleAnalytics: {
      id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    // Track visitor interaction and behavior. https://www.hotjar.com
    hotjar: {
      id: '',
      snippetVersion: 6,
    },
    themeConfig: {
      defaultTheme: 'wireframe',
  
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
  
      // Should use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultTheme
      respectPrefersColorScheme: false,
  
      // Hide the ring in Profile picture
      hideAvatarRing: false,
  
      // Available themes. To remove any theme, exclude from here.
      themes: [
        'light',
        'dark',
        'cupcake',
        'bumblebee',
        'emerald',
        'corporate',
        'synthwave',
        'retro',
        'cyberpunk',
        'valentine',
        'halloween',
        'garden',
        'forest',
        'aqua',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'black',
        'luxury',
        'dracula',
        'cmyk',
        'autumn',
        'business',
        'acid',
        'lemonade',
        'night',
        'coffee',
        'winter',
        'procyon',
      ],
  
      // Custom theme
      customTheme: {
        primary: '#fc055b',
        secondary: '#219aaf',
        accent: '#e8d03a',
        neutral: '#2A2730',
        'base-100': '#E3E3ED',
        '--rounded-box': '3rem',
        '--rounded-btn': '3rem',
      },
    },
  
    // Optional Footer. Supports plain text or HTML.
    footer: `Made with <a 
        class="text-primary" href="https://github.com/archbong/software-engineer-profollio"
        target="_blank"
        rel="noreferrer"
      >GitProfile</a> and ❤️`,
  };
  
  export default config;
  