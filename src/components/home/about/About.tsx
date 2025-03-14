"use client";
import { MyLinks } from "@/components/nav/MyLinks";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Bob, if you haven&apos;t already gathered that by
              now. I&apos;m a painter turned software engineer from Daytona,
              Florida. I specialize in the backend, primarily Node and Rust, but
              love building with whatever tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              A foolish person who starve for new stuff - technology ,news ,3D
              modeling ,boxing , basketball and bad jokes 2 a person who is
              graduated from HKUST Computer Science.He love learning in depth
              for topics and seeking more creative projects.
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
