import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faKaggle } from '@fortawesome/free-brands-svg-icons/faKaggle';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons/faNewspaper';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/dmnguyen92',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/dmnguyen92',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://medium.com/@dmnguyen92',
    label: 'Medium',
    icon: faMedium,
  },
  {
    link: 'https://www.kaggle.com/dmdm02',
    label: 'Kaggle',
    icon: faKaggle,
  },
  {
    link: 'https://scholar.google.com.sg/citations?user=OQja8QwAAAAJ&hl=en',
    label: 'Google Scholar',
    icon: faNewspaper,
  },
  {
    link: 'mailto:dmnguyen92@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
