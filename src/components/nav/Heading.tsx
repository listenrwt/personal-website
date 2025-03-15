'use client';
import styles from './heading.module.scss';
import { MyLinks } from './MyLinks';
import { OutlineButton } from '@/components/common/buttons/OutlineButton';

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      {/* <OutlineButton onClick={() => window.open('')}>My resume</OutlineButton> */}
    </header>
  );
};
