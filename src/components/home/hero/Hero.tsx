'use client';
import { StandardButton } from '@/components/common/buttons/StandardButton';
import { Reveal } from '@/components/common/Reveal';
// import { DotGrid } from "./DotGrid";
import styles from './hero.module.scss';
import { DotGrid } from './DotGrid';

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <div className={styles.titleContainer}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title2}>
              <Reveal>
                <span>ListenRwT</span>
              </Reveal>
            </h1>
            <Reveal>
              <h1 className={styles.title}>
                Hi, I&apos;m Winter Lau<span>.</span>
              </h1>
            </Reveal>
          </div>
        </div>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>Game Developer</span> &{' '}
            <span>Full Stack Developer</span>.
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I’m a third-year Computer Science student with full-stack experience
            💻. I love bringing ideas to life with creativity 🚀✨ and building
            awesome projects . Game development 🎮 is my passion, and I’m always
            ready to push boundaries and create something inspiring! 💡🔥🎨
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
