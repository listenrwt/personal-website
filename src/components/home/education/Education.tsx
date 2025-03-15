'use client';
import { SectionHeader } from '@/components/common/SectionHeader';
import { EducationItem } from './EducationItem';

export const Education = () => {
  return (
    <section className='section-wrapper' id='education'>
      <SectionHeader title='Education' dir='r' />
      {education.map((item) => (
        <EducationItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const education = [
  {
    title: 'The Chinese University of Hong Kong (CUHK)',
    major: 'BSc in Computer Science (CSCIN)',
    minor: ', minor in Data Analytics and Informatics',
    time: 'Sep 2022 - Jun 2026 (expected)',
    description: '',
    courses: [
      'Software Engineering',
      'Data Structures',
      'Database Systems',
      'Machine Learning',
      'Algorithms',
      'OS',
    ],
  },
  {
    title: 'Po Leung Kuk No.1 W.H. Cheung College',
    major: '',
    minor: '',
    time: '2015 - 2022',
    description: '',
    courses: ['Physics', 'Chemistry', 'ICT', 'M2'],
  },
];
