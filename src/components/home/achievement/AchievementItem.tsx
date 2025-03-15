import { Reveal } from '@/components/common/Reveal';
import styles from './achievement.module.scss';

interface Props {
  title: string;
  award: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
  link?: string;
}

export const AchievementItem = ({
  title,
  award,
  time,
  location,
  description,
  tech,
  link,
}: Props) => {
  const content = (
    <>
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
          <span className={styles.award}>{award}</span>
        </Reveal>

        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      <Reveal>
        <p className={styles.description}>{description}</p>
      </Reveal>
      <Reveal>
        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item} className='chip'>
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </>
  );

  return (
    <div className={styles.achievement}>
      {link ? (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};
