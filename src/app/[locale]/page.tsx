import { About } from '@/components/home/about/About';
import { Contact } from '@/components/home/contact/Contact';
import { Experience } from '@/components/home/experience/Experience';
import { Hero } from '@/components/home/hero/Hero';
import { Projects } from '@/components/home/projects/Projects';
import { Heading } from '@/components/nav/Heading';
import { SideBar } from '@/components/nav/SideBar';
import { Education } from '@/components/home/education/Education';
import { Achievement } from '@/components/home/achievement/Achievement';
import { useTranslations } from 'next-intl';
import styles from './home.module.scss';
import Head from 'next/head';

export default function Index() {
  const t = useTranslations('Index');
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <Heading />
          <Hero />
          <Projects />
          <About />
          <Education />
          <Experience />
          <Achievement />
          <Contact />
          <div
            style={{
              height: '200px',
              background:
                'linear-gradient(180deg, var(--background), var(--background-dark))',
            }}
          />
        </main>
      </div>
    </>
  );
}
