"use client";
import styles from "./heading.module.scss";
import { MyLinks } from "./MyLinks";
import { OutlineButton } from "@/components/common/buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton
        onClick={() => window.open("/LAM_ALEXANDER_CV_plan_text.pdf")}
      >
        My resume
      </OutlineButton>
    </header>
  );
};
