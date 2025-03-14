'use client';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ExperienceItem } from './ExperienceItem';

export const Experience = () => {
  return (
    <section className='section-wrapper' id='experience'>
      <SectionHeader title='Experience' dir='l' />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: 'Semtron-Tech (Turned-E! Education Limited)',
    position: 'Full Stack Developer Intern',
    time: 'Jun 2024 - Sep 2024',
    location: 'Remote / HKSTP',
    description:
      'Developed a scalable Q&A game platform for up to 1,000 users, implemented a full-stack shopping cart for the Semtron online store, and designed user interfaces for a facial recognition check-in system.',
    tech: [
      'NodeJS',
      'TypeScript',
      'React',
      'TailwindCSS',
      'SocketIO',
      'Figma',
      'Shopify',
    ],
  },
  {
    title: 'Turned-E! Education Limited',
    position: 'Software Engineer Intern',
    time: 'May 2023 - Aug 2023',
    location: 'HKSTP',
    description:
      "Developed ElmaGPT, a Cantonese chatbot with a Live2D model, and partnered with Alicloud to create a platform for training neatness recognition AI in Hong Kong's elementary schools.",
    tech: [
      'NodeJS',
      'TypeScript',
      'React',
      'TailwindCSS',
      'Python',
      'Alicloud',
      'Microsoft Azure',
    ],
  },
  {
    title: 'STEMP Education',
    position: 'Game Programmer (Contract)',
    time: 'Mar 2023 - Jun 2023',
    location: 'Remote / Kwun Tong, HK',
    description:
      'Developed "Flippable Connect Five," an open-source, multi-platform educational game featuring board flipping and rotating mechanics, along with an AI opponent powered by the minimax algorithm to enhance strategic gameplay.',
    tech: ['Unity Engine', 'C#', 'Blender', 'Plastic SCM'],
  },
];
