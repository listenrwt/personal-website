'use client';
import styles from './heading.module.scss';
import { MyLinks } from './MyLinks';
import { OutlineButton } from '@/components/common/buttons/OutlineButton';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Heading = () => {
  const pathname = usePathname();

  return (
    <header className={styles.heading}>
      <div className={styles.navLinks}>
        {pathname !== '/en' && pathname !== '/zh' && (
          <motion.span
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.0 }}
            className={styles.logo}
          >
            W<span>L</span>
          </motion.span>
        )}
        <motion.span
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.0 }}
        >
          <Link href='/' className={pathname === '/' ? styles.active : ''}>
            Home
          </Link>
        </motion.span>
        <motion.span
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.0 }}
        >
          <Link
            href='/games'
            className={pathname === '/games' ? styles.active : ''}
          >
            Games
          </Link>
        </motion.span>
      </div>

      <div className={styles.rightSection}>
        <MyLinks />
      </div>
    </header>
  );
};
