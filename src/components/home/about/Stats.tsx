import styles from './stats.module.scss';
import { AiFillCode, AiFillSmile } from 'react-icons/ai';
import { Reveal } from '@/components/common/Reveal';

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size='2.4rem' color='var(--brand)' />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className='chip'>JavaScript</span>
            <span className='chip'>Python</span>
            <span className='chip'>TypeScript</span>
            <span className='chip'>ReactJS</span>
            <span className='chip'>NodeJS</span>
            <span className='chip'>Java</span>
            <span className='chip'>Git</span>
            <span className='chip'>Microsoft Azure</span>
            <span className='chip'>Linux</span>
            <span className='chip'>Ubuntu</span>
            <span className='chip'>MS Office</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size='2.4rem' color='var(--brand)' />
            <span>Use at interest</span>
          </h4>
          <div className={styles.statGrid}>
            <span className='chip'>C/C++</span>
            <span className='chip'>C#</span>
            <span className='chip'>Unity</span>
            <span className='chip'>PlasticSCM</span>
            <span className='chip'>Blender</span>
            <span className='chip'>Photoshop</span>
            <span className='chip'>Kali</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
