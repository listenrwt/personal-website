'use client';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Project } from './Project';
import styles from './projects.module.scss';
import Link from 'next/link';

export const Projects = () => {
  return (
    <section className='section-wrapper' id='projects'>
      <SectionHeader title='Projects' dir='l' />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: 'SunnyQ',
    imgSrc: 'SunnyQ.png',
    code: 'https://github.com/alexlam184/sunnyq',
    projectLink: 'https://sunnyq.vercel.app/host',
    tech: ['NodeJS', 'TypeScript', 'React', 'Socket.IO', 'NextJS'],
    description:
      'SunnyQ is an online quiz platform that enables teachers to host quizzes and share. Students can join the room and answer questions in real-time.',
    modalContent: (
      <>
        <div className={styles.links}>
          Host link:
          <Link
            target='_blank'
            rel='nofollow'
            href='https://sunnyq.vercel.app/host'
          >
            https://sunnyq.vercel.app/host
          </Link>
        </div>

        <div className={styles.links}>
          Client link:
          <Link
            target='_blank'
            rel='nofollow'
            href='https://sunnyq.vercel.app/client'
          >
            https://sunnyq.vercel.app/client
          </Link>
        </div>
      </>
    ),
  },

  {
    title: 'Elma GPT',
    imgSrc: 'elmagpt.png',
    code: '',
    projectLink: 'https://emla-chat-web.vercel.app/',
    tech: ['NodeJS', 'TypeScript', 'React', 'Live2D', 'Microsoft Azure'],
    description:
      'Developed ElmaGPT during TurnedE! Intern, a Cantonese chatbot integrated with a Live2D model for an immersive user experience.',
    modalContent: (
      <>
        <p>
          <b>ElmaGPT</b> is an innovative web application that enhances hardware
          education through an interactive platform featuring a <b>Cantonese</b>{' '}
          virtual teacher powered by the ChatGPT API and Microsoft Azure
          Text-to-Voice. Students can ask hardware-related questions and receive
          accurate, contextual answers.
        </p>
      </>
    ),
  },
  {
    title: 'Recycler - Awarded Game',
    imgSrc: 'recycler.png',
    code: 'https://github.com/listenrwt/Recycler?tab=readme-ov-file',
    projectLink: '',
    tech: ['Unity', 'C#', 'Photoshop'],
    description:
      'Designed the award-winning game "Recycler" using the Unity Engine and C# independently within one week.',
    modalContent: (
      <>
        <p>
          Recycler is an award-winning electronic app game that challenges
          players to test their recycling skills. In this game, players must
          strategically place various types of rubbish in the correct recycling
          bins while using special recycle logos to clear neighboring bins.
        </p>
        <p>
          The game was developed using Unity and C# and was awarded the{' '}
          <b>Championship</b> of the "
          <b>2021 Robofest Electronic App Game Design Competition</b>."
        </p>
      </>
    ),
  },
  {
    title: 'Day and Night',
    imgSrc: 'DayandNight.png',
    code: 'https://github.com/listenrwt/Day-and-Night',
    projectLink: 'https://listenrwt.itch.io/day-and-night',
    tech: ['Unity', 'C#', 'Photoshop'],
    description:
      'Day and Night is a puzzle-platformer game where you must manipulate time to navigate through different environments and reach the gate.',
    modalContent: (
      <>
        <p>
          Welcome to Day and Night, a puzzle-platformer game where you must
          manipulate time to navigate through different environments and reach
          the gate.
        </p>
        <p>
          The game offers an engaging gameplay experience with its unique
          mechanic of swapping between day and night.
        </p>
      </>
    ),
  },
  {
    title: 'Chinese Light Novel LLM',
    imgSrc: 'LLM.png',
    code: 'https://huggingface.co/listenrwt/chinese_light_novel_40k',
    projectLink: '',
    tech: ['Python', 'Unsloth', 'Ubuntu'],
    description:
      'A chinese novel context generation model with over 400 downloads, finetuned with Unsloth.',
    modalContent: (
      <>
        <p>
          This model, listenrwt/chinese_light_novel_40k, is a fine-tuned version
          of the llama3-8b base model. It has been trained using 40,000 pairs of
          novel context data.
        </p>
      </>
    ),
  },
  {
    title: 'Flippable Connect Five',
    imgSrc: 'Connect5.jpg',
    code: 'https://github.com/listenrwt/Flippable-Connect-Five',
    projectLink: '',
    tech: ['Unity', 'C#', 'Blender', 'PlasticSCM'],
    description:
      'Flippable Connect Five is a unique variation of the classic game Connect Four, developed for STEMP Educaton.',
    modalContent: (
      <>
        <p>
          Flippable Connect Five is a unique variation of the classic game
          Connect Four.
        </p>
        <p>
          This game introduces exciting new gameplay elements that add strategic
          depth and challenge to the traditional format.
        </p>
        <p>The game can be played in two modes: two-player mode and AI mode.</p>
      </>
    ),
  },
];
