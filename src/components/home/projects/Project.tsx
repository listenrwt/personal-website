import { Reveal } from '@/components/common/Reveal';
import { useAnimation, useInView, motion } from 'framer-motion';
import Link from 'next/link';
import { JSX, useEffect, useRef, useState } from 'react';
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';
import { ProjectModal } from './ProjectModal';
import styles from './projects.module.scss';

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code: string;
}

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.projectImage}
          style={{
            transform: hovered
              ? 'scale(1.01) rotate(1deg)'
              : 'scale(1) rotate(0deg)',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              transform: hovered
                ? 'scale(1.05) rotate(2deg)'
                : 'scale(1) rotate(0deg)',
              transition: 'all 0.3s ease-in-out',
            }}
          />
        </div>
        <div className={styles.projectCopy}>
          <Reveal width='100%'>
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />
              {code && (
                <Link href={code} target='_blank' rel='nofollow'>
                  <AiFillGithub size='2.8rem' />
                </Link>
              )}
              {projectLink && (
                <Link href={projectLink} target='_blank' rel='nofollow'>
                  <AiOutlineExport size='2.8rem' />
                </Link>
              )}
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.projectTech}>{tech.join(' - ')}</div>
          </Reveal>
          <Reveal>
            <p className={styles.projectDescription}>
              {description}{' '}
              <span onClick={() => setIsOpen(true)}>Learn more {'>'}</span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
