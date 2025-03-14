'use client';
import { MyLinks } from '@/components/nav/MyLinks';
import { Reveal } from '@/components/common/Reveal';
import { SectionHeader } from '@/components/common/SectionHeader';
import styles from './about.module.scss';
import { Stats } from './Stats';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const About = () => {
  return (
    <section id='about' className='section-wrapper'>
      <SectionHeader title='About' dir='l' />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hi, I am Winter Lau. I am majoring in BSc in Computer Science
              (CSCIN) with a minor in Data Analytics and Informatics from The
              Chinese University of Hong Kong (CUHK).
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              As a software developer with a passion for innovation, I am
              excited to bring my skills and expertise to a dynamic team. With a
              strong foundation in computer science and data analytics, I thrive
              in environments that require creativity, problem-solving, and
              collaboration.
            </p>
          </Reveal>

          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
