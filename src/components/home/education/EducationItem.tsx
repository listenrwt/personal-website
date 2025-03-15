import { Reveal } from '@/components/common/Reveal';
import styles from './education.module.scss';

interface Props {
  title: string;
  major: string;
  minor: string;
  time: string;
  description: string;
  courses: string[];
}

export const EducationItem = ({
  title,
  major,
  minor,
  time,
  description,
  courses,
}: Props) => {
  return (
    <div className={styles.education}>
      <div className={styles.heading}>
        <Reveal>
          <span className={styles.title}>{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <>
            <span className={styles.degree}>{major}</span>
            <span>{minor}</span>
          </>
        </Reveal>
      </div>
      <Reveal>
        <p className={styles.description}>{description}</p>
      </Reveal>
      <Reveal>
        <div className={styles.tech}>
          {courses.map((item) => (
            <span key={item} className='chip'>
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
