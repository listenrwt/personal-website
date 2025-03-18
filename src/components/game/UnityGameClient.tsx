'use client';
import { Unity, useUnityContext } from 'react-unity-webgl';
import styles from './unity-game.module.scss';

const GAME_CONFIGS = {
  recycler: {
    loaderUrl: '/unity/recycler/Build/recycler.loader.js',
    dataUrl: '/unity/recycler/Build/recycler.data',
    frameworkUrl: '/unity/recycler/Build/recycler.framework.js',
    codeUrl: '/unity/recycler/Build/recycler.wasm',
  },
  dayandnight: {
    loaderUrl: '/unity/Day_and_Night/Build/Day_and_Night.loader.js',
    dataUrl: '/unity/Day_and_Night/Build/Day_and_Night.data',
    frameworkUrl: '/unity/Day_and_Night/Build/Day_and_Night.framework.js',
    codeUrl: '/unity/Day_and_Night/Build/Day_and_Night.wasm',
  },
};

interface UnityGameClientProps {
  gameId: string;
}

export default function UnityGameClient({ gameId }: UnityGameClientProps) {
  const gameConfig = GAME_CONFIGS[gameId as keyof typeof GAME_CONFIGS];

  // Move useUnityContext to the top level
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext(
    gameConfig || GAME_CONFIGS.recycler,
  );

  if (!gameConfig) {
    return <div className={styles.error}>Game not found</div>;
  }

  return (
    <div className={styles.gameContainer}>
      {!isLoaded && (
        <div className={styles.loader}>
          <p>Loading... ({Math.round(loadingProgression * 100)}%)</p>
        </div>
      )}
      <Unity
        unityProvider={unityProvider}
        className={styles.unityCanvas}
        style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
      />
    </div>
  );
}
