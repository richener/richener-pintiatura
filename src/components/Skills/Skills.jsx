import React from "react";
import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg"
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <React.Fragment>
      <section id="skilss" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="Javascript" />
            <SkillList src={checkMarkIcon} skill="Node" />
            <SkillList src={checkMarkIcon} skill="Express" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Redux" />
            <SkillList src={checkMarkIcon} skill="Saga" />
            <SkillList src={checkMarkIcon} skill="SQL" />
            <SkillList src={checkMarkIcon} skill="MongoDB" />
            <SkillList src={checkMarkIcon} skill="Vite" />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Skills;
