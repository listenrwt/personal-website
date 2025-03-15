'use server';
import { Heading } from '@/components/nav/Heading';
import dynamic from 'next/dynamic';
import styles from './game.module.scss';
import { ErrorBoundary } from '@/components/game/ErrorBoundary';

const UnityGameClient = dynamic(
  () => import('@/components/game/UnityGameClient'),
  {
    loading: () => (
      <div className={styles.loader}>
        <p>Initializing game...</p>
      </div>
    ),
  },
);

export default async function GamePage({
  params,
}: {
  params: Promise<{ gameId: string }>;
}) {
  const { gameId } = await params;
  return (
    <div className={styles.gamePage}>
      <Heading />
      <main className={styles.main}>
        <ErrorBoundary>
          <UnityGameClient gameId={gameId} />
        </ErrorBoundary>
      </main>
    </div>
  );
}
