'use client';
import { SectionHeader } from '@/components/common/SectionHeader';
import { AchievementItem } from './AchievementItem';
import styles from './achievement.module.scss';

export const Achievement = () => {
  return (
    <section className='section-wrapper' id='achievement'>
      <SectionHeader title='Achievement' dir='r' />
      {achievements.map((item) => (
        <AchievementItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const achievements = [
  {
    title: 'Hang Seng Index Innovation Challenge',
    award: 'Student Track Participant',
    time: '2024',
    location: '',
    description:
      'Lead a 3-player team to build a freefloat-adjusted factors estimator from key financial data with LLM and RAG.',
    tech: ['Pyhthon', 'Jupyter Notebook', 'RAG', 'Financial Analysis'],
    link: 'https://www.linkedin.com/posts/hang-seng-indexes-company_hangsengindexes-hsi-cyberport-activity-7227263163694522368-yEOP/',
  },
  {
    title: 'PwC HackaDay 2023',
    award: 'Participated',
    time: '2023',
    location: '',
    description:
      'Focused on web exploitation and prompt injection questions and contributed 250 points for a four-player team.',
    tech: ['Kali Linux', 'Prompt Engineering', 'SQL'],
    link: 'https://www.pwc.com/id/en/services/reimagine-digital/cybersecurity-and-cloud/hackaday.html',
  },
  {
    title: 'Robocon Hong Kong Contest',
    award: '3rd Runner Up',
    time: '2023',
    location: '',
    description:
      'Optimized elephant robot program and fine-tuned its parameters within the junior elephant team.',
    tech: ['Robotics', 'C/C++', 'Linux'],
    link: 'https://www.rthk.hk/tv/dtt31/programme/robocon2023_eng?lang=en',
  },
  {
    title: 'Robofest Electronic App Game Design Competition',
    award: 'Champion',
    time: '2021',
    location: '',
    description:
      'Designed the award-winning game "Recycler" using the Unity Engine and C# independently within one week.',
    tech: ['Unity', 'C#', 'Photoshop'],
    link: 'https://www.robofesthk.org/2021result',
  },
];
