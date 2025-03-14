'use client';
import { useEffect, useState } from 'react';
import styles from './sidebar.module.scss';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const SideBar = () => {
  const [selected, setSelected] = useState('');
  // const t = useTranslations("Index");

  useEffect(() => {
    const sections = document.querySelectorAll('.section-wrapper');

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.sideBar}
    >
      <motion.b
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setSelected('hero');
        }}
        className={styles.logo}
      >
        W<span>L</span>
      </motion.b>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href='#projects'
        onClick={() => setSelected('projects')}
        className={selected === 'projects' ? styles.selected : ''}
      >
        Projects
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href='#about'
        onClick={() => {
          setSelected('about');
        }}
        className={selected === 'about' ? styles.selected : ''}
      >
        About
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href='#education'
        onClick={() => {
          setSelected('education');
        }}
        className={selected === 'education' ? styles.selected : ''}
      >
        Education
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        href='#experience'
        onClick={() => setSelected('experience')}
        className={selected === 'experience' ? styles.selected : ''}
      >
        Exp.
      </motion.a>

      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href='#contact'
        onClick={() => setSelected('contact')}
        className={selected === 'contact' ? styles.selected : ''}
      >
        Contact
      </motion.a>
    </motion.nav>
  );
};
