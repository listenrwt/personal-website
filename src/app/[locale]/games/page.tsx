'use client';
import { Heading } from '@/components/nav/Heading';
import styles from './games.module.scss';
import { Reveal } from '@/components/common/Reveal';
import Link from 'next/link';
import { SectionHeader } from '@/components/common/SectionHeader';

interface GameCard {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

const games: GameCard[] = [
  {
    id: 'recycler',
    title: 'Recycler',
    description:
      'An award-winning recycling education game that teaches players about environmental sustainability through interactive challenges.',
    thumbnail: '/recycler.png',
  },
  /*   {
    id: 'dayandnight',
    title: 'Day and Night',
    description: 'A puzzle-platformer with time manipulation mechanics',
    thumbnail: '/images/games/DayandNight.png',
  }, */
];

export default function Games() {
  return (
    <div className={styles.gamesPage}>
      <Heading />
      <main className={styles.main}>
        <section id='games'>
          <SectionHeader title='Games' dir='l' />
          <div className={styles.gameGrid}>
            {games.map((game) => (
              <Link
                href={`/games/${game.id}`}
                key={game.id}
                rel='nofollow'
                target='_blank'
              >
                <div className={styles.gameCard}>
                  <img src={game.thumbnail} alt={game.title} />
                  <div className={styles.gameContent}>
                    <Reveal>
                      <h3>{game.title}</h3>
                    </Reveal>
                    <Reveal>
                      <p>{game.description}</p>
                    </Reveal>
                  </div>
                  <div className={styles.gameOverlay}>
                    <span className={styles.playButton}>Play Now</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
